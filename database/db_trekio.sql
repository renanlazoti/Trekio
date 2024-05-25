create database db_trekio;

use db_trekio;

create table tb_logs(
	id int primary key auto_increment,
	perguntaChatGPT varchar(255) not null,
	respostaChatGPT varchar(255) not null,
	logsDeEndPoint varchar(255) not null,
	logsAcessoData varchar(255) not null,
	logsAcessoHora varchar(255) not null
);

select * from tb_logs;