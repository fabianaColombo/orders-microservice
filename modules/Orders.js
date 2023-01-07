const request = require('request');

class Orders {
    constructor() {
      
    }

    async getOrders(){
        console.log("get orders")
        return "get orders"

    }

    async createOrder(){
        console.log("post orders")
        return "post orders"
    }
}

module.exports = Orders;