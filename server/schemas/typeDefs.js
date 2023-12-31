const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Size {
    size: String!
    quantity: Int
    price_id: String!
  }    

  type Product {
    _id: ID
    name: String!
    description: String
    images: [String]
    sizes: [Size]
    price: Float!
    category: Category!
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    price: String
    quantity: Int
  }

  type Query {
    categories: [Category]
    products(category: String, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
