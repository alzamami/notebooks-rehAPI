const express = require("express");

const { noteFetch } = require("./controllers");
const router = express.Router();

router.param("noteId", async (req, res, next, noteId) => {
  const note = await fetchNote(noteId, next);
  if (note) {
    req.note = note;
    next();
  } else {
    const error = new Error("note not found");
    error.status = 404;
    next(error);
  }
});

router.get("/", noteFetch);

module.exports = router;
