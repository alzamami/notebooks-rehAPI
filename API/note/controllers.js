const { Note, Notebook } = require("../../db/models");

exports.fetchNote = async (noteId, next) => {
  try {
    const note = await Note.findByPk(noteId);
    return note;
  } catch (error) {
    next(error);
  }
};

exports.noteFetch = async (req, res, next) => {
  try {
    const notes = await Note.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Notebook,
        as: "notebook",
        attributes: ["name"],
      },
    });
    res.json(notes);
  } catch (error) {
    next(error);
  }
};
