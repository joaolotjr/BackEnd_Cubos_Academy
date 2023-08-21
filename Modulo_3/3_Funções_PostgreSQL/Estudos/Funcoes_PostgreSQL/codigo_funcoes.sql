--select count(*) from usuarios where idade >= 18;

--select *,nome as nomeCompleto from usuarios where idade >=18;
--select count(*) as "Quantidade Usuarios" from usuarios where idade >= 18;

--select nome || ' - ' || email as NomeEmail from usuarios;
--select concat(nome, ' - ', email, ' - ', idade) as Nome_Email_Idade from usuarios;

--select avg(idade) from usuarios; -- média
--select round(avg(idade), 4) from usuarios; -- média arredondado

--select min(idade) from usuarios;
--select min(nome) from usuarios;
--select min(cadastro) from usuarios;

--select max(idade) from usuarios;
--select max(nome) from usuarios;
--select max(cadastro) from usuarios;

--select sum(idade) from usuarios;

--select idade::text from usuarios;
--select '123'::integer;
--select '123' + 4;
--select cast(idade as text) from usuarios;

--select now();
--select * from agendamentos where cast(agendamento as date) > now();
--select cast(agendamento as date) from agendamentos;
--select cast(agendamento as time) from agendamentos;
--select cast(agendamento as timestamp) from agendamentos;

--select age('2022-03-16 12:00:00', '2021-02-15 11:32:34');
--select age('2022-03-16 12:00:00'::timestamp);
--select age(cast('2022-03-16 12:00:00' as date));
--select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) > now()

--select * from usuarios;
--select coalesce(NULL, NULL, 'batata', 'cenoura')
--select concat(nome, ' - ',coalesce(telefone, 'não possui telefone')) from usuarios;
--select id, concat(nome, ' - ',coalesce(telefone, email, 'não possui')) from usuarios;

--select  idade, count(id) from usuarios group by idade;
--select  idade, count(id), sum(idade) from usuarios group by idade


-- 1 - Execute o script de criação da tabela farmacia

-- 2 - Monte uma query que retorne a quantidade de produtos 
-- agrupados por categoria e soma do estoque de todos os produtos
-- de cada categoria.

Select categoria, count(id) as "Quantidade produtos", sum(estoque) as "Soma Total do Estoque" from farmacia group by categoria;







