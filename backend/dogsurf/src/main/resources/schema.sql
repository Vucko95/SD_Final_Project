drop table if exists properties;
drop table if exists users;

create table if not exists users
(
    id        bigint primary key auto_increment,
    username  varchar(255) not null unique,
    address   varchar(255) not null,
    city      varchar(255) not null,
    email     varchar(255) not null,
    firstname varchar(255) not null,
    lastname  varchar(255) not null,
    password  varchar(255) null,
    role      varchar(255) not null
);

create table if not exists properties
(
    id                bigint auto_increment primary key,
    property_address  varchar(255) not null,
    property_location varchar(255) not null,
    booked_by_id      bigint       null,
    user_id           bigint       null,
    foreign key (booked_by_id) references users (id),
    foreign key (user_id) references users (id)
);