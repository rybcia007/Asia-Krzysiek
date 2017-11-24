-- User Roles
INSERT INTO `userRoles` (`id`,`name`) VALUES
(1,'admin'),
(2,'manager');

-- User
INSERT INTO `users` (`id`,`login`,`password`,`emailAdress`,`name`,`surname`,`isFirstLogin`,`isActive`,`userRole_id`) VALUES
(1,'testAdmin','admin123','test_admin@o2.pl','Adam','Nowak',0,1,1),
(2,'testManager','manager123','test_manager@o2.pl','Zofia','Grochowska',0,1,2);

-- Photo categories
INSERT INTO `photoCategories` (`id`,`name`) VALUES
(1,'Ślub'),
(2,'Przyjęcie weselne'),
(3,'Zabawne sytuacje');

-- Photos

-- Questions
INSERT INTO `questions` (`id`,`subject`,`emailAdress`,`message`,`wasRead`) VALUES
(1,'Jak trafić do Panny młodej?','test_1@o2.pl','Cześć. Nie możemy trafić do was..',0),
(2,'Co chcecie dostać ?','test_2@o2.pl','Kurde co wam kupić?',0),
(3,'Gdzie jest ten ślub?','test_3@o2.pl','Ileż można czekać?',1);
