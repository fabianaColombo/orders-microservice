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
        include: [{ model: this.db.user, attributes: ["first_name", "last_name", "email"] }],
      });

      if (!orders) {
        return { reponseCode: 404, message: "No orders found!" };
      }
      return orders;
      
    } catch (e) {
      console.log(e);
      return { reponseCode: 500, message: "Something went wrong!" };
    }
  }

  async createOrder(order) {
    console.log("post orders");
    return "post orders";
  }
}

module.exports = Orders;
