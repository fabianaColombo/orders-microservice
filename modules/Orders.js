const request = require("request");
const { connect } = require("../config/db.config");

class Orders {
  db = {};
  constructor() {
    this.db = connect();
  }

  async getOrders() {
    try {
      const orders = await this.db.order.findAll({
        attributes: [["id", "orderId"], "productId"],
        include: [
          {
            model: this.db.user,
            attributes: ["first_name", "last_name", "email"],
          },
        ],
      });

      return orders;
    } catch (e) {
      console.log({ Error: e, message: "Something went wrong!" });
      return e;
    }
  }

  async createOrder(order) {
    console.log("post orders");
    return "post orders";
  }
}

module.exports = Orders;
