const express = require("express");
const app = express();
app.use(express.json());
const Account = require("./controllers/accountController");

app.get("/account", Account.getAccount);
app.post("/account", Account.createAccount);
app.put("/account", Account.newBook);
app.delete("/account", Account.delete);

module.exports = app;
