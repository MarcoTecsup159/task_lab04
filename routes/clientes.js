const express = require('express');
const router = express.Router();
const pool = require('../db');

// Mostrar la lista de clientes usando EJS
router.get('/lista', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM clientes');
      res.render('clientes', { clientes: result.rows });
    } catch (error) {
      res.status(500).send('Error al obtener clientes');
    }
  });
  
  module.exports = router;
  
