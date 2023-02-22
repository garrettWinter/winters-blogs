USE winters_blogs_db;

-- DROP DATABASE IF EXISTS winters_blogs_db;

-- CREATE DATABASE winters_blogs_db;

INSERT INTO USERS (user_name, password, created_at, updated_at)
VALUES ("Vassago", "$2b$10$LnYM8dId8CbXBSP.VXyNDOv7ndyFoUoYlbYDyevgLetioQB3hIBcS", NOW(), NOW()),
("Ambrotias", "$2b$10$g4ieOs63QiLNaKsN/0G.B.tUY9EBdasR2JpCvzPtgL42Wjm3On1ru", NOW(), NOW()),
("Nikta", "efg456", NOW(), NOW()),
("Rhystic", "hij789", NOW(), NOW()),
("Elumn", "klm012", NOW(), NOW());

INSERT INTO Posts (post_title, post_body, post_user_id, created_at, updated_at)
VALUES ("Testing Title", "Testing Body", 1, NOW(), NOW()),
("Blog Post", "Don't cure in that fight", 2, NOW(), NOW()),
("Random Stuff", "Posting about random things", 4, NOW(), NOW());

INSERT INTO Comments (post_id, comment_user_id, comment, created_at, updated_at)
VALUES (1, 4, "ha ha that's funny", NOW(), NOW()),
(2, 3, "Fights where you don't cure are a pain", NOW(), NOW()),
(2, 1, "A tank smash", NOW(), NOW()),
(3, 5, "Poutine, cheese and fries cant go wrong", NOW(), NOW());