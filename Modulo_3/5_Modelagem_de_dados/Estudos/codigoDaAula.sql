create table editoras (
	id serial primary key, 
  nome text not null,
  cnpj text unique,
  data_cadastro timestamp default now()  
);

insert into editoras (nome, cnpj) values('Cubos Academy', '00112233445566');
insert into editoras ( cnpj) values('00112233445566'); -- Erro, falta nome!

create table livros (
	isbn integer primary key,
  editora_id integer references editoras(id),  -- ou-> foreign key editora_id references editoras(id),
	titulo text not null,
  data_publicacao date not null
);

insert into livros (isbn, editora_id, titulo, data_publicacao)
values
(12345, 1, 'Backend com Node.Js', '2021-12-01');

create table enderecos (
  id serial primary key,
	editora_id integer references editoras(id),
	cep text not null,
  rua text,
  bairro text,
  cidade text,
  estado char(2),
  pais text
);

insert into enderecos
(editora_id, cep)
values
(1, '41000-000');

create table categorias (
	id serial primary key,
  nome text not null
);

create table livro_categoria (
  livro_isbn integer references livros(isbn),
  categoria_id integer references categorias(id)	
);

insert into categorias (nome) values
	('tecnologia'),
  ('Programacao'),
  ('NodeJS');
  
insert into livros (isbn, editora_id, titulo, data_publicacao)
values
(12346, 1, 'Node.Js Avançado', '2022-01-01');
  

insert into livro_categoria (livro_isbn, categoria_id)
values
(12345, 1),
(12345, 2),
(12345, 3),
(12346, 2);


create table comentarios (
	id serial primary key,
	descricao text not null,
  comentario_id integer references comentarios(id),
  livro_isbn integer references livros(isbn)
 );
 
 insert into comentarios (livro_isbn, descricao)
 values
 (12345, 'Livro Muito Bom' );
 
 insert into comentarios (comentario_id, descricao)
 values
 (1, 'Obrigado pelo elogio' );
 
 
 alter table categorias add column descricao text;
 
 alter table categorias drop column descricao;
 
 alter table categorias alter column descricao type varchar(1000);

create table telefones (
  id serial primary key,
  editora_id integer,
  numero text
);

alter table telefones 
add constraint fk_telefones_editoras
foreign key (editora_id) references editoras(id);
 
 

select * from editoras;
select * from livros;
