-- ver as questoes 5, 12, 13

--select * from farmacia
--select * from usuarios


-- 1 - Faça uma query que retorna a quantidade de medicamentos da tabela farmacia.
-- Select count(medicamento) from farmacia;

-- 2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado na tabela usuarios.
-- Select min(idade) from usuarios --ou Select min(idade) as idade from usuarios

-- 3 - Faça uma query que retorna apenas a idade do usuario mais velho cadastrado na tabela usuarios.
-- Select max(idade) from usuarios

-- 4 - Faça uma query que retorna a média de idade entre os usuários cadastrados na tabela usuarios com idade maior ou igual a 18 anos.
-- Select avg(idade) from usuarios where idade >= 18;

-- 5 - Faça uma query que retorna a soma total do estoque de todos os medicamentos das categorias blue e black na tabela farmacia.
-- select sum(estoque) from farmacia where categoria = 'blue' and categoria = 'black'

--correção da 5:

--select categoria, sum(estoque) from farmacia where categoria = 'black' or categoria = 'blue' group by categoria

----------------------------------------------------------------


-- 6 - Faça uma query que retorna todas as categorias não nulas e a soma do estoque de todos os medicamentos de cada categoria na tabela farmacia.
--select categoria, sum(estoque) from farmacia where categoria is not NULL group by categoria 

-- 7 - Faça uma query que retorna a soma do estoque disponível dos medicamentos sem categoria na tabela farmacia.
--select sum(estoque) from farmacia where categoria is NULL 

-- 8 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela farmacia.
--select count(medicamento) from farmacia where categoria is NULL 

-- 9 - Faça uma query que retorna uma única coluna com a junção do nome do medicamento 
-- e a categoria entre parenteses de todos os registros em que a categoria não seja nula da tabela farmacia. Ex.: Endocet (green).
-- select concat (medicamento, ' (', categoria, ')') as "medicaemnto e categoria" from farmacia where categoria is not null 

-- 10 - Faça uma query que retorna uma única coluna com a junção do identificador e o nome do medicamento separado por um hífen 
-- e a categoria entre parenteses de todos os registros da tabela farmacia. 
-- Quando a categoria for nula, substituir por (sem categoria). Ex.: 1 - Endocet (green) ou 1 - Endocet (sem categoria).

--select concat(id, ' - ', medicamento, ' (', coalesce(categoria, 'sem categoria'), ')') as "medicaemnto e categoria" from farmacia

-- 11 - Faça uma query que retorna o nome, a idade e a data de cadastro no formato
-- AAAA-MM-DD de todos os cadastros que aconteceram no ano de 2020,na tabela usuarios.

-- select nome, idade, cast(cadastro as date) from usuarios where cast(cadastro as date) between '2020-01-01' and '2020-12-31'

-- 12 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario menor de 18 anos possui cadastrado na tabela usuarios.
--O tempo precisa ser uma coluna que retorne a quantidade de anos, meses, dias, horas, minutos e segundos em um objeto.
--Ex.: {"years":2,"months":2,"days":19,"hours":8,"minutes":22,"seconds":19}.

-- select nome, idade, email, age(cast(cadastro as timestamp)) from usuarios where idade < 18; -- esta ok

-- 13 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario, maior ou igual a 60 anos, possui cadastrado na tabela usuarios.
-- O tempo precisa ser uma coluna que retorne apenas a quantidade de anos, meses, dias em um objeto. Ex.: {"years":2,"months":2,"days":19}.

-- select nome, idade, email, age(cast(cadastro as date)) from usuarios where idade >= 60;

-- 14 - Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria que não seja nula da tabela farmacia.
-- select categoria, sum(estoque) from farmacia where categoria is not null  group by categoria 

--correcao --> select categoria, count(id) from farmacia where categoria is not null group by categoria;

-- 15 - Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde a idade seja maior ou igual a 18 anos, na tabela usuarios.
--select idade, count(id) from usuarios where idade >= 18 group by idade

-- 16 - Faça uma query que retorna as três categorias e a soma do estoque de todos os medicamentos de cada categoria, na tabela farmacia.

--select categoria, sum(estoque) from farmacia where categoria is not null group by categoria limit 3

--correcao --> select categoria, sum(estoque) from farmacia group by categoria limit 3;