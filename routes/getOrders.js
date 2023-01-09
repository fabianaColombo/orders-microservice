const express = require("express");
const { Router } = express;
const Orders = require("../modules/Orders");

const router = new Router();

router.get("/orders", async (req, res) => {
  try {
    const module = new Orders();
    const orders = await module.getOrders();

    if (orders.Error) {
      return res
        .status(500)
        .send({
          response: "Something went wrong!",
          error: orders.Error.parent,
        });
    }

    return res.status(200).send(orders);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
