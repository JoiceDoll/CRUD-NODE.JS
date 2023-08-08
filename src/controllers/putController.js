const { virtualClientDataBase } = require("./postController");

class PutRouter {
  newBook(req, res) {
    virtualClientDataBase.map((books) => {
      const listOfBooks = books.booksList;
      listOfBooks.push("book1", "book2");
      return res.status(201).send("Atualização realizada com sucesso.");
    });
  }
}

module.exports = new PutRouter();
