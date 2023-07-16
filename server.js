//import packages
const express = require("express");
const { PrismaClient } = require("@prisma/client");

// make new instance
const prisma = new PrismaClient();
const app = express();

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

//add middleware to Express application
//HTTPリクエストのボディを解析してJSONとして利用できるようにする
app.use(express.json());

app.listen(
  3000,
  console.log("REST API server ready at: http://localhost:3000")
);

