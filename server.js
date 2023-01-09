const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const getOrders = require("./routes/getOrders");
const createOrder = require("./routes/createOrder");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml')
const fs = require("fs")
const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/api", getOrders);
app.use("/api", createOrder);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, function () {
  console.log("Server started on port: " + port);
});
