const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const getOrders = require("./routes/getOrders");
const createOrder = require("./routes/createOrder");

app.use(express.json());

app.use("/api", getOrders);
app.use("/api", createOrder);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, function () {
  console.log("Server started on port: " + port);
});
