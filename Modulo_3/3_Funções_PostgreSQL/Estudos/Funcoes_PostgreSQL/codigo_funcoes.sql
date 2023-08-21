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







