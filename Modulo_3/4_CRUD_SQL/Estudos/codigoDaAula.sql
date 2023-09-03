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

--update produtos set nome = 'calça jeans', preco = 13450 where id = 3;
--update produtos set nome = 'caderno de 10 matérias' where id = 3;
--update produtos set categoria = 'calças', preco = 12950  where descricao is null;

--delete from produtos where id = 2;
--delete from produtos where descricao is null;

select * from produtos;
