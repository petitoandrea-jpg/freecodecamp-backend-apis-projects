const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const users = [];
const exercises = [];

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// 1. Creazione e lista utenti
app.post('/api/users', (req, res) => {
  const newUser = {
    username: req.body.username,
    _id: generateId()
  };
  users.push(newUser);
  res.json(newUser);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

// 2. Aggiunta esercizio
app.post('/api/users/:_id/exercises', (req, res) => {
  const user = users.find((u) => u._id === req.params._id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const description = req.body.description;
  const duration = parseInt(req.body.duration, 10);
  const dateInput = req.body.date;

  const dateObj = dateInput ? new Date(dateInput) : new Date();
  const dateFormatted = dateObj.toDateString();

  exercises.push({
    userId: user._id,
    description: description,
    duration: duration,
    date: dateFormatted,
    dateObj: dateObj
  });

  res.json({
    _id: user._id,
    username: user.username,
    date: dateFormatted,
    duration: duration,
    description: description
  });
});

// 3. Recupero log esercizi
app.get('/api/users/:_id/logs', (req, res) => {
  const user = users.find((u) => u._id === req.params._id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { from, to, limit } = req.query;
  let userExercises = exercises.filter((e) => e.userId === user._id);

  if (from) {
    const fromDate = new Date(from);
    userExercises = userExercises.filter((e) => e.dateObj >= fromDate);
  }

  if (to) {
    const toDate = new Date(to);
    userExercises = userExercises.filter((e) => e.dateObj <= toDate);
  }

  if (limit) {
    const limitNum = parseInt(limit, 10);
    if (!isNaN(limitNum)) {
      userExercises = userExercises.slice(0, limitNum);
    }
  }

  const log = userExercises.map((e) => ({
    description: e.description,
    duration: e.duration,
    date: e.date
  }));

  res.json({
    _id: user._id,
    username: user.username,
    count: log.length,
    log: log
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App in ascolto sulla porta ' + listener.address().port);
});
