CREATE TABLE IF NOT EXISTS usuarios(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre_completo VARCHAR(60) NOT NULL,
    dni VARCHAR(8) NOT NULL UNIQUE,
    password CHAR(60) NOT NULL,
    tel VARCHAR(12) NOT NULL,
    rol_id INT UNSIGNED NOT NULL,
    estado BOOLEAN DEFAULT 1,
    CONSTRAINT fk_usuario_rol 
    FOREIGN KEY (rol_id) REFERENCES roles(id),
    PRIMARY KEY (id)
);