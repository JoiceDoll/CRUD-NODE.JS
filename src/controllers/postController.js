const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const salt = 10;
const virtualClientDataBase = [];

class PostRouter {
  createAccount(req, res) {
    const { name, email, password } = req.body;
    const passwordCrypt = bcrypt.hashSync(password, salt);
    const emailAlreadyExists = virtualClientDataBase.some(
      (virtualClientDataBase) => virtualClientDataBase.email === email
    );

    if (emailAlreadyExists === true) {
      return res.status(409).send("A conta já existe.");
    }

    const data = {
      name,
      email,
      passwordCrypt,
      id: uuidv4(),
      booksList: [],
    };
    virtualClientDataBase.push(data);

    return res.status(201).send();
  }
}

module.exports = { PostRouter, virtualClientDataBase };
