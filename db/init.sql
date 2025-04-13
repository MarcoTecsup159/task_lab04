CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100)
);

INSERT INTO clientes (nombre, correo) VALUES
('Juan Pérez', 'juan@example.com'),
('Ana Torres', 'ana@example.com'),
('Carlos Ruiz', 'carlos@example.com');
