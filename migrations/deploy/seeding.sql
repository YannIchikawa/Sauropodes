





Insert into "animal" ("id","nom","nom_scientifique","etymologie","espèce","Hauteur","longueur","poids","Date_de_decouverte")
Values 
    (1,'Brachiosaure','Brachiosaurus','Lézard a bras','Brachiosauridae', 12,26, 30, 1900),
    (2,'Abydosaure','Abydosaurus McIntoshi','Lézard d"abydos de mr McIntoshi','brachiosauridae',0,0,0,2001),
    (3,'Torniera','torniera Africana','en hommage à mr Tornier','Diplodocidae',0,26,23,1908),
    (4,'Demandasaure','Demandasaurus darwini','Lezard Demanda', 'Demandasaurus darwini','rebbachisauridé',0,10,0,2011),
    (5,'Adamantisaurus', 'Adamantisaurus mezzalirai','Lezard de la formation d"Adamantina','Titanosaurie',13,0,15,2006)
;



INSERT INTO "periode" ("id","periode","sous_periode","dates")
VALUES
(1,'TRIAS INFERIEUR','Indusien','252 à 251 millions années AC'),
(2,'TRIAS INFERIEUR','Olénékien','251 à 247 millions années AC'),
(3,'TRIAS MOYEN','Anisien','247 à 242 millions années AC'),
(4,'TRIAS MOYEN','Ladinien','242 à 235 millions années AC'),
(5,'TRIAS SUPERIEUR','Carnien','235 à 228 millions années AC'),
(6,'TRIAS SUPERIEUR','Norien','228 à 208 millions années AC'),
(7,'TRIAS SUPERIEUR','Rhétien','208 à 201 millions années AC'),
(8,'JURASSIQUE Inférieur','Hettangien','201 à 199.3 millions années AC'),
(9,'JURASSIQUE Inférieur','Sinemurien','199.3 à à 190.8 millions années AC'),
(10,'JURASSIQUE Inférieur','Plensbachien','190.8 à 182.7 millions années AC'),
(11,'JURASSIQUE Inférieur','Toarcien','182.7 à 174.1 millions années AC'),
(12,'JURASSIQUE Moyen','Aalénien','174.1 à 170.3 millions années AC'),
(13,'JURASSIQUE Moyen','Bajocien','170.3 à 168.3 millions années AC'),
(14,'JURASSIQUE Moyen','Bathonien','168.3 à 166.1 millions années AC'),
(15,'JURASSIQUE Moyen','Callovien','166.1 à 163.5 millions années AC'),
(16,'JURASSIQUE Supérieur','oxfordien','163.5 à 157.3 millions années AC'),
(17,'JURASSIQUE Supérieur','Kimmérigien','157.3 à 152.1 millions années AC'),
(18,'JURASSIQUE Supérieur','Tithonien','152.1 à 145.0 millions années AC'),
(19,'Crétacé Inférieur','Berriasien','145,0 à 139.8 millions années AC'),
(20,'Crétacé Inférieur','valanginien','139.8 à 132.9 millions années AC'),
(21,'Crétacé Inférieur','Hauterivien','132.9 à 129.4 millions années AC'),
(22,'Crétacé Inférieur','Barémien','129.4 à 125 millions années AC'),
(23,'Crétacé Inférieur','Aptien','125 à 113 millions années AC'),
(24,'Crétacé Inférieur','Albien','113 à 100.5 millions années AC'),
(25,'Crétacé Supérieur','Cénomanien','100.5 à 93.9 millions années AC'),
(26,'Crétacé Supérieur','Turonien','93.9 à 89.8 millions années AC'),
(27,'Crétacé Supérieur','Coniacien','89.8 à 86.3 millions années AC'),
(28,'Crétacé Supérieur','Santonien','86.3 à 83.6 millions années AC'),
(29,'Crétacé Supérieur','Campanien','83.6 à 72 millions années AC'),
(30,'Crétacé Supérieur','Maastrichtien','72 à 66 millions années AC'),
(31,'Avant le Trias','Avant le Trias','Au delà de 252 Millions années AC');


ALTER TABLE "periode"
ALTER COLUMN id TYPE INTEGER;

INSERT INTO "animal_periode" ("animal_id","epoque_id")
VALUES
    (1,17),
    (2,24),
    (3,18),
    (4,23),
    (5,29);

ALTER TABLE "lieu"
ALTER COLUMN id TYPE INTEGER;

Insert into "lieu"("id","lieu")
Values 
    (1,'Amérique du nord'),
    (2,'Europe'),
    (3,'Afrique'),
    (4,'Amérique du sud');


INSERT INTO "animal_lieu" ("animal_id","lieu_id")
VALUES
    (1,1),(1,2),(1,3),
    (2,1),
    (3,3),
    (4,2),
    (5,4);






