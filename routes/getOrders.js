const express = require("express");
const { Router } = express;
const Orders = require("../modules/Orders");

const router = new Router();

router.get("/orders", async (req, res) => {
    try {
      const module = new Orders();
      res.send(await module.getOrders());
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;