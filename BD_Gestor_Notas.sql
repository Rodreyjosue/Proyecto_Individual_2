CREATE DATABASE IF NOT EXISTS notasdb;
USE notasdb;

CREATE TABLE notas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    estudiante VARCHAR (225) NOT NULL,
    actividades INT NOT NULL CHECK (actividades <= 35),
    primerParcial INT NOT NULL CHECK (primerParcial <= 15),
    segundoParcial INT NOT NULL CHECK (segundoParcial <= 15),
    examenFinal INT NOT NULL CHECK (examenFinal <= 35),
    notaFinal INT NOT NULL
);

SELECT * FROM notas

