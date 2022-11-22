create database Rythm;

use Rythm;

create table Orquestra(
	idOrquestra int auto_increment primary key,
	nome varchar(45),
	login varchar(45) unique,
	senha varchar(256)
);

create table Contato(
	idContato int auto_increment,
	emailContato varchar(45),
	telefoneContato CHAR(11),
	celularContato CHAR(11),
	fkOrquestra int,
	foreign key (fkOrquestra) references orquestra(idOrquestra),
	primary key (idContato, fkOrquestra)
);

create table Instrumento (
	idInstrumento int primary key auto_increment,
	nome varchar(45),
	naipe varchar(45)
);

create table Musico (
	idMusico int auto_increment,
	nome varchar(45),
	telefone char(11),
	fkOrquestra int,
	foreign key (fkOrquestra) references orquestra(idOrquestra),
	fkInstrumento int,
	foreign key (fkInstrumento) references instrumento(idInstrumento),
	primary key (idMusico, fkOrquestra)
);

insert into
	instrumento
values
	(null, 'Violino', 'cordas'),
	(null, 'Violoncelo', 'cordas'),
	(null, 'Contrabaixo', 'cordas'),
	(null, 'Harpa', 'cordas'),
	(null, 'Violão', 'cordas'),
	(null, 'Flauta', 'madeiras'),
	(null, 'Oboé', 'madeiras'),
	(null, 'Fagote', 'madeiras'),
	(null, 'Contrafagote', 'madeiras'),
	(null, 'Clarinete', 'madeiras'),
	(null, 'Clarone', 'madeiras'),
	(null, 'Corne Inglês', 'madeiras'),
	(null, 'Saxofone soprano', 'madeiras'),
	(null, 'Saxofone Alto', 'madeiras'),
	(null, 'Saxofone Tenor', 'madeiras'),
	(null, 'Saxofone Baritono', 'madeiras'),
	(null, 'Trompete', 'metais'),
	(null, 'Trompa', 'metais'),
	(null, 'Trombone', 'metais'),
	(null, 'Tuba', 'metais'),
	(null, 'Eufônio', 'metais'),
	(null, 'Flugelhorn', 'metais');
