# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.27)
# Database: Kana
# Generation Time: 2019-08-26 17:12:54 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table menu_items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `menu_items`;

CREATE TABLE `menu_items` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `meal_type` varchar(255) DEFAULT NULL,
  `description` text,
  `restaurant_id` int(11) DEFAULT NULL,
  `diet` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `popular` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

LOCK TABLES `menu_items` WRITE;
/*!40000 ALTER TABLE `menu_items` DISABLE KEYS */;

INSERT INTO `menu_items` (`id`, `name`, `meal_type`, `description`, `restaurant_id`, `diet`, `price`, `popular`)
VALUES
	(1,'Cortadito','Coffee',NULL,1,NULL,5,'false'),
	(2,'Espresso','Coffee',NULL,1,NULL,4,'true'),
	(3,'Latte','Coffee',NULL,1,NULL,6,'true'),
	(4,'Earl Grey Tea','Coffee',NULL,1,NULL,4,'false'),
	(5,'Chai Oatmeal','Breakfast','oatmeal with chai spices',1,NULL,6,'false'),
	(6,'Fluffy Pancakes','Breakfast Brunch','pancakes with mapple syrup\n',1,NULL,8,'false'),
	(7,'Fried Egg Sandwich','Breakfast Brunch','Egg, jalapenos, cheese',1,NULL,7,'true'),
	(8,'California Club Chicken Wraps','Sandwich','Chicken, tomato, bacon, lettuce, cheese',1,NULL,12,'true'),
	(9,'Spicy Grilled Cheese Sandwich','Sandwich','Grilled cheese with onions, tomatoes and jalapenos',1,NULL,8,'true'),
	(10,'Roquefort Pear Salad','Salad','mixed greens, blue cheese, pears, caramelized pecans, mustard vinaigrette',1,NULL,11,'true'),
	(11,'The Oggie','Lunch Dinner','Steak, potato, onion, and rutabaga (swede) with a side of red wine gravy or ketchup',2,NULL,10,'true'),
	(12,'The Pilgrim','Lunch Dinner','House roasted turkey, sweet potato, grilled onion and housemade stuffing. Served with red wine gravy and cranberry sauce',2,NULL,13,'false'),
	(13,'Eggplan Parmesan','Lunch Dinner','Pan fried eggplant, zucchini, broccoli, fresh mozzarella, spinach, fresh basil, parmesan and marinara.',2,'Vegetarian',12,'false'),
	(14,'Ploughman’s Plate','Appetizer Lunch Dinner','English cheeses, housemade bread, pickled onions, Branston chutney, hardboiled egg, apple, grapes, celery, carrots, and salad garnish. With cold cut house roasted beef and ham.',2,NULL,18,'true'),
	(15,'Cream of Tomato with Croutons','Soup Lunch Dinner','Cream of Tomato with Croutons',2,'Vegetarian',7,'false'),
	(16,'Broccoli & Cauliflower Cheese Bake','Side Lunch Dinner','Broccoli & Cauliflower Cheese Bake',2,'Vegetarian',8,'true'),
	(17,'Chicken Tikka Salad','Salad Lunch Dinner','Chicken breast marinated & baked in Indian spices. Served over mixed greens, cherry tomatoes, cucumbers, walnuts, red grapes, and red onion tossed in a mint-yogurt dressing.',2,'',12,'false'),
	(18,'Banoffee Pie','Dessert Lunch Dinner','Graham cracker crust, layered with housemade caramel, fresh whipped cream, and topped with sliced bananas.',2,NULL,8,'true'),
	(19,'The Italian','Lunch Dinner','Pepperoni, salami, capocollo, ham, fresh mozzarella, fresh basil, and roasted tomato with a side of marinara',2,NULL,12,'false'),
	(20,'Lovely Bit a Salmon','Lunch Dinner','Marinated salmon, white wine and cream dill sauce, sautéed asparagus, garlic roasted tomato, spinach and red potato.',2,NULL,14,'true'),
	(21,'Breaky sandwich','Brunch','breaky sandwich/ sausage/ fried egg/ fontina/ greens/ potatoes',3,NULL,12,'false'),
	(22,'Rigatoni Carbonara','Pasta Lunch Dinner','rigatoni carbonara/ guanciale/ pecorino/ egg yolk',3,NULL,17,'true'),
	(23,'Bucatini all\'Amatraciana','Pasta Lunch Dinner','bucatini all\'amatraciana/ guanciale/ onion/ chili/ pomodoro',3,NULL,18,'false'),
	(24,'Chitarra Cacio e Pepe','Pasta Lunch Dinner','chitarra/ cacio e pepe/ pecorino/ tellicherry peppercorn',3,'Vegetarian',17,'true'),
	(25,'Bacon Fontina Pizza','Pizza Lunch Dinner','bacon/ caramelized onion/ fontina/ egg/ saba',3,NULL,16,'true'),
	(26,'Radiatorre ','Pasta Lunch','radiatorre/ black garlic/ lemon/ cream/ toasted breadcrumbs',3,'Vegetarian',13,'false'),
	(27,'Spaghetti with Polpette','Pasta Lunch Dinner','spaghetti/ chris bianco\'s pomodoro/ parmesan/ basil with polpette',3,NULL,16,'true'),
	(28,'Chopped Salad','Salad Lunch','chopped salad/ all the things/ olive brine vinaigrette',3,NULL,12,'false'),
	(29,'Housemade Sourdough Bread','Appetizer Lunch Dinner','housemade sourdough bread/ cultured butter/ good olive oil',3,NULL,4,'true'),
	(30,'Greek Sausage Pizza','Pizza Lunch Dinner','tomato/ greek sausage + salumi/ fennel/ charred peppers/ orange',3,NULL,15,'false'),
	(31,'Queso Cheese Dip','Appetizer Lunch Dinner','Melted Cheese with chorizo and jalapeños',4,'',7,'true'),
	(32,'Nachos','Appetizer Lunch Dinner','Cheese, Jalapenos, Tomato, Avocado, choice of beef, chicken or chorizo',4,NULL,11,'true'),
	(33,'Qusadillas','Appetizer Lunch Dinner','Cheese Qusadilla, choice of beef, chicken, pork',4,NULL,13,'false'),
	(34,'Burrito','Lunch Dinner','Rice, beans & pico de gallo (Todo adentro / All inside.',4,NULL,8,'true'),
	(35,'Tacos','Lunch Dinner','Carnitas, Asada, Beef, Chicken, ',4,NULL,3,'true'),
	(36,'Enchiladas','Lunch Dinner','Enchiladas Queso O Res, Arroz Y Frijoles: Chicken, Beef, pork or cheese',4,NULL,13,'false'),
	(37,'Carne Asada (Estilo Don Juan) Con Arroz, Frijoles Y Guacamole','Lunch Dinner','Grilled flank steak Casa Don Juan style, with rice, beans and guacamole.',4,NULL,16,'false'),
	(38,'Fajitas (Pollo, Res O Camaron) Con Arroz, Frijoles, Guacamole Y Tortillas','Lunch Dinner','chicken, beef or shrimp fajitas with rice, beans, guacamole and tortillas.',4,NULL,15,'true'),
	(39,'Huevos con Papas','Lunch Dinner Brunch','Con Arroz Y Frijoles / Potatoes with eggs, rice and beans.',4,NULL,12,'false'),
	(40,'Huevos Divorciados','Lunch Dinner','Green & Red sauce Con chorizo o carne',4,NULL,12,'true'),
	(41,'Arepa Benny','Breakfast Brunch Lunch','2 poached eggs, short-rib, spinach, tomato, salsa verde hollandaise',5,'Gluten-free',13,'false'),
	(42,'Latin Hash 2.0 ','Breakfast Brunch Lunch','Pulled short rib, chive potatoes, roasted peppers, caramelized onions, fried egg',5,'Gluten-free',13,'true'),
	(43,'Tres Leches Waffle','Breakfast Brunch Dessert Lunch','Berry compote, chocolate chips, coconut flakes, coconut whip',5,NULL,10,'false'),
	(44,'Elote \"cupcakes\"','Dinner','Plantain cups, fire roasted corn, jalapenos, pepper, red onions, garlic',5,NULL,11,'true'),
	(45,'Avocado Toast','Breakfast Brunch','Smashed avocado, poached egg, cherry tomato tossed with basil, lemon zest',5,NULL,10,'false'),
	(46,'Chicken Tinga Omelet','Breakfast Brunch Lunch','3 egg omelet in spicy tomato salsa, chicken tinga, queso, sour cream',5,'Gluten-free',13,'false'),
	(47,'Morning Power Skillet','Breakfast Brunch Lunch','Sliced avocado, spanish rice, black beans, 2 scrambled egg whites, red salsa, queso fresco',5,'Gluten-free',11,'true'),
	(48,'Lavender Fog','Coffee','Earl grey tea, house made lavender, whole milk',5,NULL,6,'true'),
	(49,'Smoked Lox Bagel','Breakfast Brunch Lunch','Poppy seed, smoked Scottish lox, capers, red onions, scallion cream cheese',5,NULL,10,'false'),
	(50,'Empanadas','Lunch','choice of beef, chicken, cheese, shrimp',5,NULL,8,'false'),
	(51,'Crab Rangoon','Appetizer Lunch Dinner',NULL,6,NULL,7,'true'),
	(52,'Veggie Egg Rolls','Appetizer Lunch Dinner',NULL,6,'Vegetarian',5,'false'),
	(53,'Papaya Salad','Salad Lunch Dinner','Shredded green papaya, green beans, fresh tomatoes, & chilli/lime sauce',6,'Vegetarian Vegan Gluten-free Spicy',10,'true'),
	(54,'Pad Thai','Lunch Dinner','Stir fry rice noodles, egg, beansprout, peanuts, and green onion in tamarind sauce choice of Vegetable/Tofu, Chicken/Pork, Beef, Crispy Pork, Shrimp/Squid, Combination, Seafood\n\n',6,'Vegetarian Vegan Gluten-free',14,'true'),
	(55,'Pad See Eiw','Lunch Dinner','stir fry flat rice noodles, Chinese broccoli & egg',6,'Vegetarian Vegan Gluten-free',12,'true'),
	(56,'Drunken Noodles','Lunch Dinner','stir fry flat rice noodles, garlic, onion, peppers & basil',6,'Vegetarian Vegan Gluten-free Spicy',12,'true'),
	(57,'Thai Style Fried Rice','Lunch Dinner','stir fry jasmine rice, tomatoes, onion & egg',6,'Vegetarian Vegan Gluten-free',12,'false'),
	(58,'Spicy Basil','Lunch Dinner','Stir Fry w/ garlic, onion, peppers, bamboo shoots and basil',6,'Spicy',13,'false'),
	(59,'Red Curry','Lunch Dinner','red curry paste w/ bamboo shoot, bell peppers, basil & coconut milk',6,'Vegetarian Vegan Gluten-free Spicy',13,'false'),
	(60,'Kua Gai','Lunch Dinner','Stir fry flat rice noodles w/ chicken, bean sprouts, and peanuts',6,'Vegetarian Vegan Gluten-free Spicy',11,'true'),
	(61,'Save The Tuna','Starter Brunch','hand rolled sushi made with seasonal vegetables and forbidden rice',7,'Vegan Gluten-free',9,'true'),
	(62,'Buffalo Cauliflower Wings','Starter Lunch Dinner','hot and spicy buffalo sauce covered cauliflower with a side of ranch dressing',7,'Vegan Spicy',10,'true'),
	(63,'Downtown Tony','Lunch Dinner','portobello mushroom sliders with vegetable slaw and sriracha aioli. served with fresh cut fries and organic ketchup.',7,'Vegan',13,'false'),
	(64,'Elote Tamale','Starter Lunch Dinner','filled with fresh non-gmo masa, baked corn, a magical secret sauce, and topped with parmesan cheese',7,'Vegan',9,'true'),
	(65,'The Mac Daddy Burger','Lunch Dinner','a kickass burger topped with creamy mac n cheese, collard greens, gochujang bbq sauce, and secret burger sauce. want it naked? we can do that too! served with fresh cut fries and organic ketchup.',7,'Vegan',14,'false'),
	(66,'Bao Wow','Starter Lunch Dinner','steamed bao, tempura tofu, shitake hoisin',7,'Vegan',8,'false'),
	(67,'The Fancy Cheeseboard','Starter','seasonal, locally made, artisan cheese (by @virgincheese) curated with seasonal fruits, nuts and dips',7,'Peanuts',10,'false'),
	(68,'Pho-King-Delicious','Dinner Lunch','vietnamese style pho with a mushroom broth, seasonal vegetables, tofu, and rice noodles',7,'Gluten-free',13,'true'),
	(69,'Chicken Pot Pie Gnocchi','Dinner Lunch','house made creamy herb sauce with chicken, peas, carrots, and mushrooms. topped with pie crust crumbles and herbs',7,'Vegan',13,'false'),
	(70,'Pamela Anderson Raw Power Tacos','Lunch Dinner','walnuts, sunflower seeds, sun-dried tomato, raw veggies, avocado, tahini, fresh lime',7,'Vegan Gluten-free Peanuts Oil-free',13,'false');

/*!40000 ALTER TABLE `menu_items` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pictures
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pictures`;

CREATE TABLE `pictures` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `menu_items_id` int(11) DEFAULT NULL,
  `url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;

LOCK TABLES `pictures` WRITE;
/*!40000 ALTER TABLE `pictures` DISABLE KEYS */;

INSERT INTO `pictures` (`id`, `name`, `menu_items_id`, `url`)
VALUES
	(1,'cortadito',1,'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg'),
	(2,'espresso',2,'https://www.espressozone.com/media/wysiwyg/espresso-zone/best-espresso-machine-guide.jpg'),
	(3,'latte',3,'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Latte-Art-Tulip.jpg'),
	(4,'earl-grey',4,'https://cdn.shopify.com/s/files/1/1234/1342/products/Cup_Shots_Earl_Grey_Supreme_2000x.jpg?v=1564071340'),
	(5,'chai oatmeal',5,'https://images.media-allrecipes.com/userphotos/720x405/1122507.jpg'),
	(6,'fluffy pancakes',6,'https://images.media-allrecipes.com/userphotos/720x405/5079227.jpg'),
	(7,'fried-egg-sandwich',7,'https://images.media-allrecipes.com/userphotos/560x315/434326.jpg'),
	(8,'California Club Chicken Wraps',8,'https://images.media-allrecipes.com/images/56042.jpg'),
	(9,'Spicy Grilled Cheese Sandwich',9,'https://images.media-allrecipes.com/userphotos/560x315/5081856.jpg'),
	(10,'Roquefort Pear Salad',10,'https://images.media-allrecipes.com/userphotos/720x405/49064.jpg'),
	(12,'The Oggie',11,'https://www.cornishpastyco.com/wp-content/uploads/2013/01/premium-pasty.jpg'),
	(13,'The Pilgrim',12,'https://www.cornishpastyco.com/wp-content/uploads/2013/01/signature-pasty.jpg'),
	(14,'Eggplant parmesan',13,'https://www.cornishpastyco.com/wp-content/uploads/2013/01/vegetarian-pasty.jpg'),
	(15,'Ploughman’s Plate',14,'https://www.cornishpastyco.com/wp-content/uploads/2018/08/appetizers-1.jpg'),
	(16,'Cream of Tomato',15,'https://www.cornishpastyco.com/wp-content/uploads/2015/03/soups.jpg'),
	(17,'Broccoli & Cauliflower Cheese Bake',16,'https://www.cornishpastyco.com/wp-content/uploads/2015/03/sides.jpg'),
	(18,'Chicken Tikka Salad',17,'https://www.cornishpastyco.com/wp-content/uploads/2015/03/salads.jpg'),
	(19,'Banoffee Pie',18,'https://www.cornishpastyco.com/wp-content/uploads/2018/08/desserts.jpg'),
	(20,'The Italian',19,'https://www.cornishpastyco.com/wp-content/gallery/food/cpc7.jpg'),
	(21,'Lovely Bit a Salmon',20,'https://www.cornishpastyco.com/wp-content/gallery/food/cpc8.jpg'),
	(22,'Breaky sandwich',21,'https://s3-media4.fl.yelpcdn.com/bphoto/guTt6q-U03pDtefUTn3FdQ/o.jpg'),
	(23,'rigatoni-carbonara',22,'https://s3-media3.fl.yelpcdn.com/bphoto/OwqDtB8f00YtllU3RK-p4Q/o.jpg'),
	(24,'bucatini all\'amatraciana',23,'https://s3-media4.fl.yelpcdn.com/bphoto/8vluiPnaMgFJFfFhIaVggA/o.jpg'),
	(25,'Chitarra cacio e pepe',24,'https://s3-media1.fl.yelpcdn.com/bphoto/qzT1liY9yX3H3RvQ1TYP_Q/o.jpg'),
	(26,'Bacon Fontina Pizza',25,'https://s3-media4.fl.yelpcdn.com/bphoto/JpYYjvqopefIOc1nsj638Q/o.jpg'),
	(27,'Radiatore',26,'https://s3-media2.fl.yelpcdn.com/bphoto/IuAErRCUt6SKZmzZf_-wCw/o.jpg'),
	(28,'Spaghetti with Polpette',27,'https://s3-media3.fl.yelpcdn.com/bphoto/-GvhAUBBor3nEkocutqF0g/o.jpg'),
	(29,'Chopped Salad',28,'https://s3-media3.fl.yelpcdn.com/bphoto/qu4IxG8i3o95AOd-4hSGlA/o.jpg'),
	(30,'housemade sourdough bread',29,'https://s3-media2.fl.yelpcdn.com/bphoto/tdmOEE0Xu-PxQ49XWUUP4g/o.jpg'),
	(31,'Greek sausage pizza',30,'https://s3-media4.fl.yelpcdn.com/bphoto/WxtOLfUK9AaEa2Jrj48G1g/o.jpg'),
	(32,'Queso dip',31,'https://www.loveandoliveoil.com/wp-content/uploads/2017/01/chorizo-quesoH.jpg'),
	(33,'Nachos',32,'https://images-gmi-pmc.edge-generalmills.com/3ebc9927-47d2-4eae-90b3-590036635d18.jpg'),
	(34,'Quesadilla',33,'https://www.cookingclassy.com/wp-content/uploads/2019/02/quesadillas-2.jpg'),
	(35,'Burrito',34,'https://www.budgetbytes.com/wp-content/uploads/2018/07/Make-Ahead-Bean-and-Cheese-Burritos-front.jpg'),
	(36,'Tacos',35,'https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9108-1.jpg'),
	(37,'Enchiladas',36,'https://s3-media4.fl.yelpcdn.com/bphoto/58p9WanopmYhYnwA0J-OYQ/o.jpg'),
	(38,'Carne Asada',37,'https://s3-media4.fl.yelpcdn.com/bphoto/OwkMNq7yTjDCNOAltAPYSw/o.jpg'),
	(39,'Fajitas',38,'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/6045301_dtlet8152.jpg?itok=5TqlqLZt'),
	(40,'Huevos con papas',39,'https://images-gmi-pmc.edge-generalmills.com/fc36915e-d0e7-4669-9db1-733c74bf7d03.jpg'),
	(41,'Huevos divorciados',40,'https://cdn2.cocinadelirante.com/sites/default/files/images/2016/09/istock21962348small.jpg'),
	(42,'Arepa Benny',41,'https://s3-media2.fl.yelpcdn.com/bphoto/rOWng9Zz3clzZmACGA2MqA/o.jpg'),
	(43,'latin hash',42,'https://s3-media4.fl.yelpcdn.com/bphoto/Lat_jTiclW-i63-dr4D7-A/o.jpg'),
	(44,'tres leches',43,'https://s3-media4.fl.yelpcdn.com/bphoto/3HCXNp7-j1xyNedW51mq1A/o.jpg'),
	(45,'elote-cupcakes',44,'https://s3-media2.fl.yelpcdn.com/bphoto/Z_bTz2lHtpGw7Eh2C2K5aA/o.jpg'),
	(46,'avocado toast',45,'https://s3-media4.fl.yelpcdn.com/bphoto/QFr3I-6SRDVzHqOlWs0bPw/o.jpg'),
	(47,'chicken tinga omelet',46,'https://s3-media3.fl.yelpcdn.com/bphoto/7V--nIXe0gH47414qEQQ2g/o.jpg'),
	(48,'power skillet',47,'https://s3-media3.fl.yelpcdn.com/bphoto/6PpVB0tixIhwSQ1NS5yhew/o.jpg'),
	(49,'lavender fog',48,'https://s3-media4.fl.yelpcdn.com/bphoto/xdxXHRCFzMuXFU3PMTwjBg/o.jpg'),
	(50,'smoked lox bagel',49,'https://s3-media4.fl.yelpcdn.com/bphoto/3naVWlaVO1xiBvDTvsRPQQ/o.jpg'),
	(51,'empanadas',50,'https://s3-media4.fl.yelpcdn.com/bphoto/4KG0DhSXHpdOCnIZ5-Gffg/o.jpg'),
	(52,'crab-rangoon',51,'https://static.wixstatic.com/media/332a7c_a16bc5e270a444dea1baa61c606bdf11~mv2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp'),
	(53,'veggie-egg-rolls',52,'https://static.wixstatic.com/media/332a7c_c20a3f2f4c004052a23244c5799e522f~mv2_d_3024_3024_s_4_2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp'),
	(54,'papaya-salad',53,'https://static.wixstatic.com/media/786139_5f48c4461c394ce38c29b304ddd87cd1~mv2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp'),
	(55,'Pad Thai',54,'https://static.wixstatic.com/media/332a7c_1d08e63c4b074032b7a8dc4631bc6568~mv2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp'),
	(56,'Pad See Eiw',55,'https://static.wixstatic.com/media/332a7c_d6af29def928418db9402aeaf4ca0898~mv2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp'),
	(57,'Drunken Noodles',56,'https://static.wixstatic.com/media/332a7c_ce98e0d0027c41eb85ff1cfe38992c1f~mv2_d_3024_3024_s_4_2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp'),
	(58,'Thai Style Fried Rice',57,'https://static.wixstatic.com/media/786139_ab2de149a9334c9c93b79481261a5747~mv2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp'),
	(59,'Spicy basil',58,'https://s3-media4.fl.yelpcdn.com/bphoto/fOblfAs5Pj-Y-TNHfhauLw/o.jpg'),
	(60,'Red Curry',59,'https://static.wixstatic.com/media/332a7c_2628667e322143f0a9bb5fca920d4ad5~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp'),
	(61,'Kua Gai',60,'https://static.wixstatic.com/media/786139_2b1557e1c8324529941bd9692bfe678d~mv2_d_1920_1281_s_2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp'),
	(62,'save-the-tuna',61,'https://s3-media1.fl.yelpcdn.com/bphoto/RcYPB8_FVxtTKuAVDCEV4A/o.jpg'),
	(63,'buffalo-cauliflower',62,'https://s3-media4.fl.yelpcdn.com/bphoto/PSEFvsIPjL-tNVfQZPvaxQ/o.jpg'),
	(64,'downtown-tony',63,'https://s3-media1.fl.yelpcdn.com/bphoto/RCzseNq9eyOLZD-Md0GX_w/o.jpg'),
	(65,'elote-tamale',64,'https://s3-media2.fl.yelpcdn.com/bphoto/c3cm2nRykB1acUkfHhrlTw/o.jpg'),
	(66,'mac-daddy-burger',65,'https://s3-media1.fl.yelpcdn.com/bphoto/rsYjv-DseljbItHRLva3jw/o.jpg'),
	(67,'baw-wow',66,'https://s3-media1.fl.yelpcdn.com/bphoto/saLDZa8A_Dv89ihWAvtTig/o.jpg'),
	(68,'cheeseboard',67,'https://images.happycow.net/venues/1024/57/54/hcmp57542_484305.jpeg'),
	(69,'pho-king-delicious',68,'https://s3-media4.fl.yelpcdn.com/bphoto/pVJFX9wSN0DwrF_6VpUJgA/o.jpg'),
	(70,'chicken-pot-pie-gnocchi',69,'https://s3-media4.fl.yelpcdn.com/bphoto/k90zQXXt67h5B3fqNp5Xag/o.jpg'),
	(71,'raw-power-tacos',70,'https://s3-media1.fl.yelpcdn.com/bphoto/_rjC8e09zA0V5P-rdKeBog/o.jpg');

/*!40000 ALTER TABLE `pictures` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Restaurants
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Restaurants`;

CREATE TABLE `Restaurants` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `zipcode` varchar(11) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `opening_time` time DEFAULT NULL,
  `closing_time` time DEFAULT NULL,
  `day_opened` varchar(255) DEFAULT NULL,
  `meal_type` varchar(255) DEFAULT NULL,
  `ratings` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

LOCK TABLES `Restaurants` WRITE;
/*!40000 ALTER TABLE `Restaurants` DISABLE KEYS */;

INSERT INTO `Restaurants` (`id`, `name`, `address`, `zipcode`, `city`, `state`, `opening_time`, `closing_time`, `day_opened`, `meal_type`, `ratings`)
VALUES
	(1,'Besta','1114 S Casino Center Blvd','89104','Las Vegas','NV','06:00:00','16:00:00','Mon Tues Wed Thurs Fri Sat','Coffee Breakfast Lunch Brunch',5),
	(2,'Lornish Patty','10 E Charleston Blvd','89104','Las Vegas','NV','11:00:00','23:00:00','Mon Tues Wed Thurs Fri Sat Sun','Brunch Appetizers Lunch Dinner',5),
	(3,'Lesther\'s','1130 S Casino Center Blvd','89104','Las Vegas','NV','11:00:00','23:00:00','Mon Tues Wed Thurs Fri Sat Sun','Brunch Lunch Dinner',5),
	(4,'Casa Don Jose','1204 S Main St','89104','Las Vegas','NV','07:00:00','22:00:00','Mon Tues Wed Thurs Fri Sat Sun','Breakfast Brunch Lunch Dinner',4),
	(5,'Setters & Founders','120 S Main St #110','89104','Las Vegas','NV','07:00:00','21:00:00','Mon Tues Wed Thurs Fri Sat Sun','Coffee Breakfast Brunch Lunch Dinner',4),
	(6,'C O Thai','1108 S 3rd St','89104','Las Vegas','NV','11:00:00','21:00:00','Mon Tues Wed Thurs Fri Sat Sun','Lunch Dinner',4),
	(7,'VegeState','616 Carson Ave #120','89101','Las Vegas','NV','08:00:00','21:00:00','Mon Tues Wed Thurs Fri Sat Sun','Breakfast Brunch Lunch Dinner',5),
	(8,'The Greatwhich','900 S Las Vegas Blvd','89101','Las Vegas','NV','10:00:00','17:00:00','Mon Tues Wed Thurs Fri Sat','Lunch',5),
	(9,'Great Pie','725 S Las Vegas Blvd #140','89101','Las Vegas','NV','11:00:00','21:00:00','Mon Tues Wed Thurs Fri Sat Sun','Lunch Dinner',5),
	(10,'Jake’s Rollin Smoke BBQ','725 S Las Vegas Blvd','89101','Las Vegas','NV','10:00:00','22:00:00','Mon Tues Wed Thurs Fri Sat Sun','Lunch Dinner',4);

/*!40000 ALTER TABLE `Restaurants` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
