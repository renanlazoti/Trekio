create database db_trekio;
use db_trekio;

create table tb_logs(
	id int primary key auto_increment,
    perguntaChatGPT varchar(255) not null,
    respostaChatGPT varchar(255) not null
);

# ATUALIZAÇÃO DO BANCO DE DADOS

select * from tb_logs;

create database db_trekio;
use db_trekio;

create table tb_logs(
	id int primary key auto_increment,
	logsDeConsultas varchar(255) not null
);

select * from tb_logs;


# ATUALIZAÇÃO FINAL BD_Trekio

create database db_trekio;

use db_trekio;

create table tb_logs(
	id int primary key auto_increment,
	perguntaChatGPT varchar(255),
    respostaChatGPT varchar(255),
    logsDeConsultas varchar(255) not null
);

select * from tb_logs;