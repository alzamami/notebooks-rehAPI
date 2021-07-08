const express = require("express");

const {
  notebookFetch,
  notebookCreate,
  noteCreate,
  fetchNotebook,
} = require("./controllers");
const router = express.Router();

// CRUD

router.param("notebookId", async (req, res, next, notebookId) => {
  const notebook = await fetchNotebook(notebookId, next);
  if (notebook) {
    req.notebook = notebook;
    next();
  } else {
    const error = new Error("notebook not found");
    error.status = 404;
    next(error);
  }
});

router.get("/", notebookFetch);

router.post("/", notebookCreate);
router.post("/:notebookId/notes", noteCreate);

module.exports = router;
