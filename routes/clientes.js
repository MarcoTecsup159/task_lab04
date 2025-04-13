const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET /clientes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS fecha_actual');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al conectar con la base de datos');
  }
});

module.exports = router;
