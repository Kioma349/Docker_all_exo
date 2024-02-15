const express = require('express');
const { Pool } = require('pg');

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: 'linus',
  host: 'conteneur_postgres', // Assurez-vous que ce nom correspond au nom de votre conteneur PostgreSQL
  database: 'linus_db',
  password: 'linus1001',
  port: 5432, // Port par défaut de PostgreSQL
});

const app = express();
const PORT = 3000; // Le port sur lequel votre serveur express est exposé

app.use(express.json());

// Route pour récupérer uniquement les noms de la table 'personnes'
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT nom FROM personnes'); // sélectionner uniquement la colonne 'nom'
    const noms = result.rows.map(row => row.nom); // Extraction des noms à partir des résultats
    res.json(noms); // Envoi des noms au format JSON
  } catch (err) {
    res.status(500).json({ error: err.message }); // Gestion des erreurs
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`); // Confirmation que le serveur est bien démarré
});
