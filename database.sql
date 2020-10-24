CREATE TABLE "imageGallery" (
"id" serial PRIMARY KEY,
"path" VARCHAR(200) NOT NULL,
"description" VARCHAR(200) NOT NULL,
"likes" INTEGER
);

INSERT INTO "imageGallery"("path", "description", "likes") VALUES('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', '0');
INSERT INTO "imageGallery"("path", "description", "likes") VALUES('images/Ap_Creative_Stock_Header.jpg', 'A relaxed man.', '0');
INSERT INTO "imageGallery"("path", "description", "likes") VALUES('images/boy_computer.jpg', 'AHHHHHHH!', '0');
INSERT INTO "imageGallery"("path", "description", "likes") VALUES('images/future_food.jpg', 'Could this be what the future holds?', '0');