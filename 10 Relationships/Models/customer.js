const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// 1️⃣ Add Orders FIRST
const addOrders = async () => {
  await Order.deleteMany({}); // optional: clean DB
  let res = await Order.insertMany([
    { item: "samosa", price: 12 },
    { item: "Chips", price: 10 },
    { item: "Chocolate", price: 40 },
  ]);
  console.log("Orders added:", res);
};

// 2️⃣ Add Customer AFTER orders exist
const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul Kumar",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  if (!order1 || !order2) {
    console.log("Orders not found!");
    return;
  }

  cust1.orders.push(order1._id);
  cust1.orders.push(order2._id);

  let savedCustomer = await cust1.save();
  console.log("Customer saved:", savedCustomer);

  let customers = await Customer.find({}).populate("orders");
  console.log("All customers:", customers);
};

// 3️⃣ Run sequentially
const run = async () => {
  await addOrders();
  await addCustomer();
};

run();
