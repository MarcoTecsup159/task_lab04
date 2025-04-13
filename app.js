const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importar rutas
const clientesRoute = require('./routes/clientes');
const productosRoute = require('./routes/productos');

// Middleware para usar las rutas
app.use('/clientes', clientesRoute);
app.use('/productos', productosRoute);

// Ruta raíz
app.get('/', (req, res) => {
    res.render('index');
  });

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
