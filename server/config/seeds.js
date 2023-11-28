const db = require("./connection");
const { User, Product, Category } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Category", "categories");
  await cleanDB("Product", "products");
  await cleanDB("User", "users");

  const categories = await Category.insertMany([
    { name: "tote" },
    { name: "hoodie" },
    { name: "tshirt" },
  ]);

  console.log("categories seeded");

  const products = await Product.insertMany([
    {
      name: "Suffer Tote",
      description:
        "14 by 15 inch heavy canvas tote with full side and bottom gussets.<br/>*PROMOTIONAL PRODUCT NOT MEANT TO BE WASHED",
      images: ["/Assets/Images/Suffer_Tote.jpg"],
      category: categories[0]._id,
      price: 19.99,
      quantity: 10,
      price_id: "1",
    },
    {
      name: "Lost Again",
      description: "Creme 6.5oz Garment Dye Crew Neck T-Shirt",
      images: ["/Assets/Images/LB_BlockLetters.jpg", "/Assets/Images/LB_BlockLetters_B.jpg"],
      category: categories[2]._id,
      price: 34.99,
      quantity: 11,
      price_id: "2",
    },
    {
      name: "Dream Warriors Hoodie",
      category: categories[1]._id,
      description:
        "10 oz. 70% cotton 30% polyester hoodie with puff print artwork.",
      images: ["/Assets/Images/LBS_HoodieFront.jpg", "/Assets/Images/LBS_HoodieBack.jpg"],
      price: 55.99,
      quantity: 12,
      price_id: "3",
    },
  ]);

  console.log("products seeded");

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
