CREATE DATABASE notes_db;
USE notes_db;

CREATE TABLE notes (
    id int AUTO_INCREMENT NOT NULL,
    note_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
