-- Users: admin and user1
INSERT INTO users (id, address, city, email, firstname, lastname, password, role, username)
VALUES (99, 'Dame St, Dublin 2, Ireland', 'Dublin', 'admin@gmail.com', 'Admin',
        'Admin', 'admin', 'ADMIN', 'admin');

INSERT INTO users (id, address, city, email, firstname, lastname, password, role, username)
VALUES
(1, 'Capel Street 4', 'Dublin', 'user1@gmail.com', 'Darren', 'Black',
        'pass1', 'USER', 'user1'),
(2, 'Marion Stret 2', 'Dublin', 'user2@gmail.com', 'Niamh', 'McCortney',
        'pass2', 'USER', 'user2'),
(3, 'Bravbery Mconris 23', 'Galway', 'user3@gmail.com', 'Ivaqn', 'Blackers',
        'pass3', 'USER', 'user3'),
(4, 'Mitrhil Street 35', 'Cork', 'user4@gmail.com', 'John', 'Livnros',
        'pass3', 'USER', 'user4'),
(5, 'Blacioner  Station 24', 'Dublin', 'user5@gmail.com', 'Gregor', 'Mickeny',
        'pass5', 'USER', 'user5'),
(6, 'Crindwon Leterver 23', 'Galway', 'user6@gmail.com', 'Bianca', 'Krinovski',
        'pass6', 'USER', 'user6'),
(7, 'Matthew Corner 22', 'Dublin', 'user7@gmail.com', 'Tifanny', 'Lawrence',
        'pass7', 'USER', 'user7'),
(8, 'Bistrol Caption 11', 'Cork', 'user8@gmail.com', 'Dilan', 'Mcdermott',
        'pass8', 'USER', 'user8'),
(9, 'Cambden Pass Apt4', 'Dublin', 'user9@gmail.com', 'Anthony', 'Ibicius',
        'pass9', 'USER', 'user9'),
(10, 'Mayeston Furen 4', 'Dublin', 'user10@gmail.com', 'Leonardo', 'Gray',
        'pass10', 'USER', 'user10');



-- Property of user1
INSERT INTO properties (property_address, property_location, user_id, booked_by_id)
VALUES
('Capel Street 4', 'Dublin, M1J5ZA', 1, null),
('Marion Street 2', 'Dublin, PS23FT', 2, null),
('Bravbery Mconris 23', 'Dublin, MD I1J 5ZA', 3, null),
('Mitrhil Street 35', 'Cork,FR233k', 4, null),
('Blacioner  Station 24', 'Dublin, LDS42A', 5, null),
('Crindwon Leterver 23', 'Galway, LDX23', 6, null),
('Matthew Corner 22', 'Dublin, CLK0S3', 7, null),
('Bistrol Caption 11', 'Cork, PLK3FW', 8, null),
('Cambden Pass Apt4', 'Dublin, WESS92', 9, null),
('Mayeston Furen 4', 'Dublin, PRF4S3', 10, null);
