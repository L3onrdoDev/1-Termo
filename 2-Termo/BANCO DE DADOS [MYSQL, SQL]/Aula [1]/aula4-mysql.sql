-- COMANDOS PARA CRIAR BANCO DE DADOS
create database LOJA_VIRTUAL;

create database LOJA_VIRTUAL2;

-- COMANDOS PARA APAGAR
drop database LOJA_VIRTUAL2;

-- COMANDOS PAARA ATIVAR BANCO DE DADOS
use LOJA_VIRTUAL;

-- MOSTRAR TABELA BANCO DE DADOS
show tables;

-- COMANDOS PARA CRIAR TABELA
create table CLIENTES (
Id_Cliente int auto_increment primary key,
Nome_Cliente varchar(60) not null,
CPF_Cliente varchar (14) not null,
Cadastro_Cliente varchar(100),
Cotato_Cliente int,
Data_Nascimento datetime not null
);

create table PEDIDO (
Id_Pedido int auto_increment primary key,
CEP varchar(08) not null,
Forma_Pagamento varchar(100) not null,
Quantidade_Pedido int,
Detalhes_Pedido varchar(100),
Itens_Pedidos varchar(100)
);

create table FUNCIONARIO (
Id_Funcionario int auto_increment primary key,
Nome_Funcionario varchar (60) not null,
Turno_Funcionario int not null,
Cargo_Funcionario varchar(100) not null,
Funcao_Funcionario varchar(100) not null,
Horario_Funcionario varchar(04) not null
);

-- COMANDOS PARA ALTERAR INFORMAÇÕES
-- ADICIONAR NOVO ATRIBUTO
alter table CLIENTES add TELEFONE varchar(15);

-- ALTERAR O TIPO DE DADOS E TAMANHO DO ATRIBUTO
alter table CLIENTES modify TELEFONE varchar(15);

-- RENOMEAR O NOME DO ATRIBUTO
-- alter table PEDIDO change TELEFONE CELULAR(15);

-- RENOMEAR TABELAS
alter table CLIENTES rename to CLIENTELA;

-- EXCLUIR ATRIBUTO
alter table CLIENTES drop column TELEFONE;

-- LIMPAR DADOS DA TABELA
truncate table CLIENTELA;