# freeCodeCamp - Back End Development and APIs Projects 🚀

Questo repository raccoglie i 5 progetti pratici sviluppati per ottenere la certificazione ufficiale **Back End Development and APIs** rilasciata da [freeCodeCamp](https://www.freecodecamp.org/).

## 🛠️ Tecnologie Utilizzate
- **Runtime:** Node.js
- **Framework:** Express.js
- **Librerie:** Multer, Cors, Dotenv

---

## 📂 Struttura del Progetto

### 1. [Timestamp Microservice](./01-timestamp-microservice)
Microservizio che analizza stringhe di date e timestamp Unix, restituendo un oggetto JSON con il timestamp in millisecondi (`unix`) e il formato stringa standard GMT (`utc`).

### 2. [Request Header Parser Microservice](./02-header-parser-microservice)
API REST che estrae e restituisce in JSON i metadati del client che effettua la richiesta: indirizzo IP, lingua preferita e informazioni sul software/sistema operativo (`user-agent`).

### 3. [URL Shortener Microservice](./03-url-shortener-microservice)
Servizio di abbreviazione URL con validazione tramite risoluzione DNS (`dns.lookup`) per garantire l'esistenza del dominio e reindirizzamento HTTP verso l'URL originale tramite un ID univoco.

### 4. [Exercise Tracker](./04-exercise-tracker)
Applicazione completa per la gestione utenti e il tracciamento delle attività fisiche. Supporta:
- Creazione e visualizzazione utenti
- Registrazione di esercizi con data, durata e descrizione
- Endpoint per il recupero dei log con filtri per intervallo date (`from`, `to`) e paginazione (`limit`).

### 5. [File Metadata Microservice](./05-file-metadata-microservice)
Microservizio per il caricamento di file multipart (`form-data`) tramite `multer`, che restituisce dimensione in byte, mime-type e nome del file caricato.

---

## 📜 Certificato
Puoi verificare la mia certificazione ufficiale su freeCodeCamp tramite il seguente link:  
👉 [Visualizza il certificato](INCOLLA_QUI_IL_LINK_DEL_TUO_CERTIFICATO)
