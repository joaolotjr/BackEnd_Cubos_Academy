-- drop database aula_crud;

create database aula_crud;

create table if not exists produtos (
	id serial primary key,
  	nome text,
  	descricao text,
  	preco integer,
  	categoria text
);