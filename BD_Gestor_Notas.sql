CREATE DATABASE IF NOT EXISTS notasdb;
USE notasdb;

CREATE TABLE notas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    estudiante VARCHAR (225) NOT NULL,
    actividades INT NOT NULL CHECK (actividades <= 35),
    primer_Parcial INT NOT NULL CHECK (primer_Parcial <= 15),
    segundo_Parcial INT NOT NULL CHECK (segundo_Parcial <= 15),
    examen_Final INT NOT NULL CHECK (examen_Final <= 35),
    notaFinal INT NOT NULL
);

SELECT * FROM notas

