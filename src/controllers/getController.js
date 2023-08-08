const { virtualClientDataBase } = require("./postController");

class getRouter {
  getAccount(req, res) {
    return res.status(201).send(virtualClientDataBase);
  }
}

module.exports = new getRouter();
