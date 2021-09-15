create table if not exists users(
    id int primary key auto_increment,
    firstName varchar(80)not null,
    lastName varchar(80)not null,
    username varchar(40)not null,
    phone int(20)not null,
    department varchar(20)not null,
    user_password varchar(80)not null   
);
create table if not exists materials(
    id int primary key auto_increment,
    materialName varchar(80)not null,
    quantity varchar(20)not null,
    unitCost varchar(20)not null,
    rate varchar(20)not null,
    total varchar(20)not null,
    supply_date date not null    
);