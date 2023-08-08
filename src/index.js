const express = require("express");
const app = express();
app.use(express.json());
const { PostRouter } = require("./controllers/postController");
const GetRouter = require("./controllers/getController");
const PutRouter = require("./controllers/putController");
const DeleteBooks = require("./controllers/deleteController");
const ClassPostRouter = new PostRouter();

app.get("/account", GetRouter.getAccount);
app.post("/account", ClassPostRouter.createAccount);
app.put("/account", PutRouter.newBook);
app.delete("/account", DeleteBooks.delete);

module.exports = app;
