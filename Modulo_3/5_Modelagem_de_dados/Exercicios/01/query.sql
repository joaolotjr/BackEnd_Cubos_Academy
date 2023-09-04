create database ecommerce;

create table produtos (
  id serial primary key,
  nome varchar(100),
  descricao text,
  preco integer,
  quantidade_em_estoque integer,
  categoria_id integer
);

create table categorias(
	id serial primary key,
  nome varchar(50)  
);

alter table produtos 
add constraint fk_categoria_id
foreign key (categoria_id) references categorias(id);

create table itens_do_pedido(
	id serial primary key,
  pedido_id integer,
  quantidade integer,
  produto_id integer references produtos(id)
);


create table clientes(
	cpf char(11) unique,
  nome varchar(150)
);

create table vendedores(
	cpf char(11) unique,
  nome varchar(150)
);

create table pedidos (
	id serial primary key,
  valor integer,
  clientes_cpf char(11) references clientes(cpf),
  vendedores_cpf char(11) references vendedores(cpf)
);

alter table itens_do_pedido 
add constraint fk_pedido_id
foreign key (pedido_id) references pedidos(id);

insert into categorias (nome)
values
('frutas'),
('verduras'),
('massas'),
('bebidas'),
('utilidades');


insert into produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id)
values
('Mamão',	'Rico em vitamina A, potássio e vitamina C.', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras.',	90,	34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado.', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

insert into clientes(cpf, nome)
values
('80371350042', 'José Augusto Silva'),
('67642869061', 'Antonio Oliveira'),
('63193310034', 'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');

insert into vendedores(cpf, nome)
values
('82539841031', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

--compras:
--A)
insert into pedidos(valor, cliente_cpf, vendedores_cpf)
values
(9650, '80371350042', '28007155023' );

insert into itens_do_pedido(pedido_id, quantidade, produto_id)
values
(1, 1, 1),
(1, 1, 10),
(1, 6, 11),
(1, 1, 15),
(1, 5, 2);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Mamão';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Pepsi de 2l';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where nome = 'Heinekens de 600ml';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Escova dental';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where nome = 'Maça';

-- os Demais é so seguir a msm lógica