--select count(*) from usuarios where idade >= 18;

--select *,nome as nomeCompleto from usuarios where idade >=18;
--select count(*) as "Quantidade Usuarios" from usuarios where idade >= 18;

--select nome || ' - ' || email as NomeEmail from usuarios;
--select concat(nome, ' - ', email, ' - ', idade) as Nome_Email_Idade from usuarios;

--select avg(idade) from usuarios; -- média
--select round(avg(idade), 4) from usuarios; -- média arredondado