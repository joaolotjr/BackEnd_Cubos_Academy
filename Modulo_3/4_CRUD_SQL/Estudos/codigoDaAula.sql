create table if not exists produtos (
	id serial primary key,
  	nome text,
  	descricao text,
  	preco integer,
  	categoria text
);