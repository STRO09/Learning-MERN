const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let users = [
  { id: 1, name: "Sagar", salary: 50000 },
  { id: 2, name: "Stro", salary: 40000 },
];

const nextId = () =>
  users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1;

app.get("/", (req, res) => res.send("Hello world"));

app.get("/users", (req, res) => {
  if (users.length == 0) return res.status(404).send("NO users found");
  res.json(users);
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).send("NO user with the given id found");
  res.json(user);
});

app.post("/createuser", (req, res) => {
  const { name, salary } = req.body;
  if (!name || !salary) return res.status(400).send("All fields are required");
  const user = { id: nextId(), name: name, salary: salary };
  users.push(user);
  res.status(201).json(user);
});

app.put("/updateuser/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).send("NO user found with the given id");
  const { newname, newsalary } = req.body;
  if (newname) user.name = newname;
  if (newsalary) user.salary = newsalary;
  res.json({ message: "User updated", updatedUser: user });
});

app.delete("/deleteuser/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).send("NO user found with the given id");
  users = users.filter(user=> user.id!==id);
  res.json({message:"User deleted", users: users});
});
app.listen(3000, () => console.log("Server listening at localhost:3000"));
