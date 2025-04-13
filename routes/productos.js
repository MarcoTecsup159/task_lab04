const express = require('express');
const router = express.Router();
const pool = require('../db');

// Mostrar la lista de productos usando EJS
router.get('/lista', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.render('productos', { productos: result.rows });
  } catch (error) {
    res.status(500).send('Error al obtener productos');
  }
});

module.exports = router;
