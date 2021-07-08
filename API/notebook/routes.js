const express = require("express");

const { notebookFetch, notebookCreate } = require("./controllers");
const router = express.Router();

// CRUD

router.get("/", notebookFetch);

router.post("/", notebookCreate);

module.exports = router;
