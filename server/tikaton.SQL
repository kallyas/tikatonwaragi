create table if not exists users(
    id int (80) primary key ,
    firstName varchar(80)not null,
    lastName varchar(80)not null,
    username varchar(40)not null,
    phone int(20)not null,
    department varchar(20),
    user_password varchar(80)not null   
);
create table if not exists materials(
    id int primary key,
    item varchar(80)not null,
    quantity varchar(20)not null,
    unitPrice varchar(20)not null,
    amount varchar(20)not null,
    category varchar(20)not null,
    supplier_id varchar (45)not null , 
    invoiceNumber varchar (45)not null
);

create table if not exists products(
    id varchar(80) primary key,
    product_name varchar(255)not null,
    category varchar(45)not null,
    quantity int(45)not null,
    rate int(45)not null,
    batch_no varchar(45)not null,
    amount int(45)not null,
    product_date varchar(45)
);

create table if not exists tika_transaction(
    id int primary key,
    tname varchar(255)not null,
    t_category varchar(20)not null,
    t_details varchar(20)not null,
    t_type varchar(20)not null,
    t_date varchar(20)not null,
        
);
create table if not exists tika_sales(
    id varchar (40)primary key,
    product_name varchar(255),
    category varchar(20)not null,
    quantity varchar(20)not null,
    unit_price int (10),
    amount int (10),
    payment_mode varchar(10), 
    sale_date varchar(20)not null     
);
