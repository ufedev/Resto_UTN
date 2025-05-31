CREATE TABLE IF NOT EXISTS mesas(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    capacidad INT NOT NULL,
    descripcion_reserva VARCHAR(255) DEFAULT NULL,
    reservada DATETIME DEFAULT NULL,
    ocupada BOOLEAN DEFAULT 0,
    mozo_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_mesa_mozo
    FOREIGN KEY (mozo_id) REFERENCES usuarios(id),
    PRIMARY KEY (id)
);