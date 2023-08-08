const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const salt = 10;
const virtualClientDataBase = [];

class Account {
  getAccount(req, res) {
    return res.status(201).send(virtualClientDataBase);
  }

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
  newBook(req, res) {
    virtualClientDataBase.map((books) => {
      const listOfBooks = books.booksList;
      listOfBooks.push("book1", "book2");
      return res.status(201).send("Atualização realizada com sucesso.");
    });
  }

  delete(req, res) {
    virtualClientDataBase.map((books) => {
      const list = books.booksList;
      list.pop();
      return res.status(201).send("Livro deletado com sucesso.");
    });
  }
}

module.exports = new Account();
