CREATE DATABASE OFICINA_LEONARDO_BARBOSA; 
USE OFICINA_LEONARDO_BARBOSA;


CREATE TABLE Clientes (
ID_Clientes int auto_increment primary key,
Nome varchar(32) not null,
Localizacao varchar(58) not null,
Telefone varchar(20) not null,
CPF varchar(11) not null,
Data_Nascimento datetime not null
);

CREATE TABLE Veiculos (
ID_Veiculos int auto_increment primary key,
Modelo_Veiculo varchar(25) not null, 
Placa_Veiculo varchar(8) not null, 
Chassi_Veiculo varchar(17) not null, 
Defeitos text not null, 
Ano_Veiculo datetime not null
);

CREATE TABLE Marcas (
ID_Marcas int auto_increment primary key, 
Nome_Marcas varchar(32) not null, 
Marca_Motos varchar(150) not null, 
Marca_Carros varchar(150) not null, 
Marca_Pecas varchar(150) not null, 
Franquias varchar(150) not null 
); 

CREATE TABLE Modelos (
ID_Modelos int auto_increment primary key, 
Nome_Modelo varchar(50) not null, 
Ano_Modelo datetime not null, 
Emplacamento varchar(8) not null, 
Fabricante_Modelo varchar(150) not null, 
Cor_Modelo varchar(32)
);

CREATE TABLE Funcionarios ( 
ID_Funcionarios int auto_increment primary key, 
Nome_Funcionario varchar(32), 
Turno varchar(15), 
Banco_Horas int, 
Salario decimal, 
Cargo varchar(15)
);

CREATE TABLE Servicos (
ID_Servicos int auto_increment primary key, 
Servico_Realizado text not null, 
Data_Servico datetime not null, 
Funcionario_Responsavel varchar(32) not null, 
Pecas_Trocadas text not null, 
Tipo_Servicos text not null
); 

CREATE TABLE Pecas (
ID_Pecas int auto_increment primary key, 
Estoque_Pecas int, 
Pecas_Usadas text not null,
Data_Reposicao datetime not null, 
Pecas_Quebradas text, 
Pecas_Novas text
);

CREATE TABLE Ordem_Servicos (
ID_Ordem_Servicos int auto_increment primary key, 
Resp_Servico varchar(32) not null, 
Tipo_Servico text not null, 
Custo_Total int not null, 
Pecas_Substituidas text not null, 
Data_Emissao datetime not null
);

CREATE TABLE Pagamentos (
ID_Pagamentos int auto_increment primary key, 
Nota_Fiscal text not null, 
Debito varchar(3) not null, 
Data_Pagamento datetime not null, 
Boleto text not null, 
Credito text not null
);

CREATE TABLE Fornecedores (
ID_Fornecedores int auto_increment primary key, 
Loja_Pecas varchar(100) not null,
Loja_Ferramentas varchar(100) not null,
Loja_Pneus varchar(100) not null,
Loja_Hidraulica varchar(100) not null,
Estoque_Atual int
);

alter table Modelos rename to Modelos_Fab;