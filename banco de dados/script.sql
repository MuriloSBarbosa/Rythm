create database Rythm;

use rythm;

create table orquestra(
idOrquestra int auto_increment primary key,
nome varchar(45) unique,
CNPJ CHAR(14) unique,
email varchar(45),
senha varchar(45)
);

create table integrante (
idIntegrante int auto_increment,
nome varchar(45),
fkOrquestra int,
foreign key (fkOrquestra) references orquestra(idOrquestra),
primary key (idIntegrante,fkOrquestra)
);

create table Instrumento (
idInstrumento int primary key auto_increment,
nome varchar(45),
naipe varchar(45)
);

create table Musico (
fkMusico int,
foreign key (fkMusico) references integrante(idIntegrante),
fkInstrumento int,
foreign key (fkInstrumento) references instrumento(idInstrumento),
fkOrquestra int,
foreign key (fkOrquestra) references orquestra(idOrquestra),
primary key (fkMusico,fkInstrumento,fkOrquestra)
);

insert into orquestra values(null,'ccb','123','ccb@','123');
insert into integrante values(null,'Murilo',1);
insert into integrante values(null,'Marcos',1);
insert into integrante values(null,'Vinicius',1);
insert into instrumento values(null,'sax','madeira');
insert into instrumento values(null,'violino','cordas');
insert into instrumento values(null,'tuba','metais');
insert into musico values(1,1,1);
insert into musico values(2,2,1);
insert into musico values(3,3,1);

-- Meus musicos
select  it.nome,
		i.nome 
			from musico m 
				join instrumento i on m.fkInstrumento = i.idInstrumento
				join orquestra o on o.idOrquestra = m.fkOrquestra
				join integrante it on it.idIntegrante = m.fkMusico
		where o.idOrquestra = 1;
        
-- Musicos de cada classe 
select  it.nome,
		i.nome 
			from musico m 
				join instrumento i on m.fkInstrumento = i.idInstrumento
				join orquestra o on o.idOrquestra = m.fkOrquestra
				join integrante it on it.idIntegrante = m.fkMusico
		where o.idOrquestra = 1 and i.naipe = "madeira";