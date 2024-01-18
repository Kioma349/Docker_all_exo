const express = require('express');
const { Pool } = require('pg');

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: 'linus',
  host: 'localhost', // Utilisez 'mon-conteneur-postgres' si vous utilisez Docker Network
  database: 'linus_db',
  password: 'linus1001',
  port: 3000,
});

const app = express();
const PORT = 3000;

app.use(express.json());

// Route pour récupérer les données de la table 'personnes'
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM personnes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
