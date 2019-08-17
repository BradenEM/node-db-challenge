const express = require("express");
const projectsRouter = require("./projects/projects");

const server = express();

server.use(express.json());
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Node DB Sprint Challenge</h1>`);
});

module.exports = server;
