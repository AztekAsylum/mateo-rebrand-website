require("dotenv").config({ path: "../.env" });

const stripe = require("stripe")(process.env.STRIPE_API);
const express = require("express");
const path = require("path");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server, { context: authMiddleware }));

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.sendFile("../client/index.html");
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`use graphql @ http://localhost:${PORT}/graphql`);
      console.log(`API server running on port ${PORT}!`);
    });
  });
};

// const YOUR_DOMAIN = "http://localhost:3001";

// app.post("/create-checkout-session", async (req, res) => {
//   console.log("deeznuts");
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: "price_1OEgYQLGtIOU4Mlebn8nByzQ",
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

startApolloServer();
