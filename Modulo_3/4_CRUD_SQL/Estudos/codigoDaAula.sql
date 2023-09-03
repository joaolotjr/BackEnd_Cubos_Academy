-- drop database aula_crud;

create database aula_crud;

create table if not exists produtos (
	id serial primary key,
  	nome text,
  	descricao text,
  	preco integer,
  	categoria text
);


--insert into produtos (nome, descricao, preco, categoria) values ('camisa', 'Linda Camisa', 5999, 'Roupas');
--insert into produtos (nome, descricao, preco, categoria) values ('camisa', NULL, 5999, 'Roupas'); 
--insert into produtos (nome, preco, categoria) values ('camisa', 5999, 'Roupas');
--insert into produtos (nome, descricao, preco, categoria) values ('camisa', NULL, 5999, 'Roupas');

--insert into produtos (nome, descricao, preco, categoria) values ('calça Jeans', null, 12900, 'Roupas'),
--('Bermuda', 'Bermuda longa preta', 12900, 'Roupas'),('meia', 'meia bonita do bob', 1290, 'Roupas');