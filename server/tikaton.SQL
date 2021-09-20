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
    item varchar(80)not null,
    quantity varchar(20)not null,
    unitPrice varchar(20)not null,
    amount varchar(20)not null,
    category varchar(20)not null,
    supplier_id varchar (45)not null , 
    invoiceNumber varchar (45)not null
);