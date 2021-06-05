const express = require("express");
const schema = require("./schema");
require("./db");
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("sever is started");
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = new schema({ name, email });
  await user.save();
  res.status(201).json({ message: "User created succesfully" });
});

app.get("/users", async (req, res) => {
  try {
    const data = await schema.find({});
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete("/users", async (req, res) => {
  try {
    const data = await schema.find({});
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.options("/users", async (req, res) => {
  try {
    const data = await schema.find({});
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.put("/users", async (req, res) => {
  try {
    const data = await schema.find({});
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});
//all api are performing same operations...
