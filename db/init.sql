CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100)
);

INSERT INTO clientes (nombre, correo) VALUES
('Juan Pérez', 'juan@example.com'),
('Ana Torres', 'ana@example.com'),
('Carlos Ruiz', 'carlos@example.com');


CREATE TABLE IF NOT EXISTS productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  precio DECIMAL(10, 2)
);

INSERT INTO productos (nombre, precio) VALUES
('Laptop Lenovo', 2500.00),
('Mouse Inalámbrico', 80.50),
('Teclado Mecánico', 150.00),
('Monitor 24 pulgadas', 700.00)
ON CONFLICT DO NOTHING;
