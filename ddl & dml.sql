CREATE TABLE customer (
    id INT,
    name VARCHAR(50),
    parent_id INT
);

INSERT INTO customer (id, name, parent_id) VALUES
(1, 'Zaki', 2),
(2, 'Ilham', NULL),
(3, 'Irwan', 2),
(4, 'Arka', 3);
