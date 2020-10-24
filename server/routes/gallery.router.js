const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {

    let galleryId = req.params.id;
    let sqlText = '';


    sqlText = `UPDATE "imageGallery" SET "likes" = "likes" +1 WHERE "id" =$1`;


    pool.query(sqlText, [galleryId])
        .then((result) => {
            console.log('Successful PUT', result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error in PUT`, error);
            res.sendStatus(500);
        })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "imageGallery" ORDER BY "id";`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`From GET`, result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error in GET`, error);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;