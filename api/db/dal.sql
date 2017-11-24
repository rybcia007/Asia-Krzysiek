-- Create Table --

DROP TABLE IF EXISTS `userRoles`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `photoCategories`;
DROP TABLE IF EXISTS `photos`;
DROP TABLE IF EXISTS `questions`;
--
CREATE TABLE IF NOT EXISTS `userRoles` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `login` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `emailAdress` varchar(256) NOT NULL,
  `name` varchar(256),
  `surname` varchar(256),
  `isFirstLogin` tinyint(1) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `userRole_id` int UNSIGNED,
  INDEX userRoles_index (`userRole_id`),
  FOREIGN KEY (`userRole_id`) REFERENCES userRoles(`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19;

CREATE TABLE IF NOT EXISTS `photoCategories` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19;

CREATE TABLE IF NOT EXISTS `photos` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `uri` varchar(256) NOT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `photoCategory_id` int UNSIGNED,
  INDEX photoCategories_index (`photoCategory_id`),
  FOREIGN KEY (`photoCategory_id`) REFERENCES photoCategories(`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19;

CREATE TABLE IF NOT EXISTS `questions` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `subject` varchar(256) NOT NULL,
  `emailAdress` varchar(256) NOT NULL,
  `message` varchar(256) NOT NULL,
  `wasRead` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19;
