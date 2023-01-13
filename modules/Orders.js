const request = require("request");
const { connect } = require("../config/db.config");

/** Class representing product orders. */
class Orders {
  db = {};
  constructor() {
    this.db = connect();
  }

  /**
   * @async
   * gets all orders in the database with the corresponding user attached
   */
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

  /**
   * @async
   * posts new order to the database all orders in the database
   * @param {object} order - object containing the keys email and productId, both values are strings
   */
  async createOrder(order) {
    try {
      if (!order || !order.productId || !order.email) {
        let message = "Email and Product ID must be provided";
        return { response: "error", message };
      }

      const fetchUsersList = async (page) => {
        let arrayOfusers = [];
        return new Promise(async (resolve, reject) => {
          const getPages = async (page = 1) => {
            const options = {
              method: "GET",
              url: `https://reqres.in/api/users?page=${page}`,
            };
            const users = await new Promise((resolve, reject) => {
              request(options, function (error, response) {
                if (error) {
                  return reject(error);
                } else {
                  return resolve(JSON.parse(response.body));
                }
              });
            });
            users.data.forEach((u) => arrayOfusers.push(u));

            if (users.page === users.total_pages) {
              return resolve(arrayOfusers);
            } else {
              getPages(page + 1);
            }
          };
          getPages(page);
        });
      };

      const usersList = await fetchUsersList();
      const { productId, email } = order;

      const checkOrderValidity = async (user, product) => {
        const validUser = usersList.find((u) => u.email === user);

        const existingOrder = await this.db.order.findOne({
          where: { productId: product },
          include: [
            {
              model: this.db.user,
              where: { email: user },
            },
          ],
        });

        if (!validUser) {
          return { isValid: false, message: "Invalid user email" };
        } else if (existingOrder) {
          return {
            isValid: false,
            message: `User ${user} has already placed and order for product ID ${product}`,
          };
        } else {
          return { isValid: true, user: validUser };
        }
      };

      const availableUser = await checkOrderValidity(email, productId);

      if (!availableUser.isValid) {
        return { response: "error", message: availableUser.message };
      }

      const findUserInLocalDb = await this.db.user.findOne({
        where: { email: email },
      });
      if (!findUserInLocalDb) {
        const createLocalUser = await this.db.user.create({
          first_name: availableUser.user.first_name,
          last_name: availableUser.user.last_name,
          email: email,
        });

        if (
          createLocalUser &&
          createLocalUser.dataValues &&
          createLocalUser.dataValues.id
        ) {
          const placeOrder = await this.db.order.create({
            userId: createLocalUser.dataValues.id,
            productId: productId,
            date: new Date().toISOString().split("T")[0],
          });
          return {orderId: placeOrder.dataValues.id};
        }
      } else {
        const placeOrder = await this.db.order.create({
          userId: findUserInLocalDb.dataValues.id,
          productId: productId,
          date: new Date().toISOString().split("T")[0],
        });
        return {orderId: placeOrder.dataValues.id};
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}

module.exports = Orders;
