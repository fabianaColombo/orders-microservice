const express = require("express");
const { Router } = express;
const Orders = require("../modules/Orders");

const router = new Router();

router.post("/order", async (req, res) => {
  try {
    const module = new Orders();
    const postBody = await module.createOrder(req.body.order);

    if(postBody && postBody.orderId){
      return res.status(202).send({ status: "Success", orderId: postBody.orderId });
    }

    if (postBody.response === "error" || postBody.parent.name === "error") {
      return res.status(400).send({
        status: "Bad Request",
        error: postBody.message ? postBody.message : postBody,
      });
    }

  } catch (e) {
    return res.status(500).send({ status: "Internal Server Error" });
  }
});

module.exports = router;
