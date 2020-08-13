const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const { VariablesAreInputTypesRule } = require("graphql");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());

mongoose.connect(
  "mongodb+srv://kabilesh:test123@cluster0.vkynw.mongodb.net/gql-db?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Now listening for requests on port 4000");
});
