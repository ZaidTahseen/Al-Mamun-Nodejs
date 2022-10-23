const express = require("express");
const router = express.Router();
const shortId = require("shortid");

const { getDb } = require("../util/databaseConnection");

router.get("/all", async(req, res) => {
    const db = getDb();
    const allUrls = await db.collection('urls').find().toArray();
    // res.status(200).render('server.ejs' , { allUrls : allUrls })
    res.status(200).json(allUrls);

});

router.get("/:shortUrl", (req, res) => {});

router.post("/", async (req, res) => {
    const db = getDb();
    await db.collection('urls').insertOne(req.body)
    res.send('Form Submitted ')
});

router.post("/detail", (req, res) => {});

module.exports = router;
