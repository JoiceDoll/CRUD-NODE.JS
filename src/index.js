const express = require("express");
const app = express();
app.use(express.json());
const { postRouter } = require("./controllers/postController");
const getRouter = require("./controllers/getController");
const buyNewBook = require("./controllers/putController");
const deleteBooks = require("./controllers/deleteController");
const classPostRouter = new postRouter();

app.get("/account", getRouter.getAccount);
app.post("/account", classPostRouter.createAccount);
app.put("/account", buyNewBook.newBook);
app.delete("/account", deleteBooks.delete);

module.exports = app;
