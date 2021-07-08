const express = require("express");
const cors = require("cors");
const notebookRoutes = require("./API/notebook/routes");
const noteRoutes = require("./API/note/routes");

const app = express();

const db = require("./db/models");

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  next();
});
app.use("/notebooks", notebookRoutes);
app.use("/notes", noteRoutes);
const run = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log("Connected Successfully");
    app.listen(8000, () => {
      console.log("localhost:8000");
    });
  } catch (error) {
    console.error(error);
  }
};

run();
