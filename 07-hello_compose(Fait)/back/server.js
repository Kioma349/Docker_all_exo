const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Configuration de la connexion à la base de données à partir de variables d'environnement
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'linus',
  host: process.env.POSTGRES_HOST || 'db', // Nom du service Docker Compose pour PostgreSQL
  database: process.env.POSTGRES_DB || 'linus_db',
  password: process.env.POSTGRES_PASSWORD || 'linus1001',
  port: process.env.POSTGRES_PORT || 5432,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Route de base pour tester que l'API fonctionne
app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API des tâches !" });
});

// Route GET pour récupérer toutes les tâches
app.get('/tasks', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Route POST pour ajouter une nouvelle tâche
app.post('/tasks', async (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ error: 'Description is required' });
  }

  try {
    await pool.query('INSERT INTO tasks (description) VALUES ($1)', [description]);
    res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
