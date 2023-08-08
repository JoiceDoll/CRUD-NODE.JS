const { virtualClientDataBase } = require("./postController");

class DeleteBooks {
  delete(req, res) {
    virtualClientDataBase.map((books) => {
      const list = books.booksList;
      list.pop();
      return res.status(201).send("Livro deletado com sucesso.");
    });
  }
}

module.exports = new DeleteBooks();
