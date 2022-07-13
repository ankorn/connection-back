import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

dotenv.config();

const app = express();
const port = process.env.PORT;

const schema = buildSchema(`
  type Query {
    name: String
  }
`);

const root = {
  name: () => {
    console.log("user name called");
    ("Anton");
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
