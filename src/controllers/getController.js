const { virtualClientDataBase } = require("./postController");

class GetRouter {
  getAccount(req, res) {
    return res.status(201).send(virtualClientDataBase);
  }
}

module.exports = new GetRouter();
