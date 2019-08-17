const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await db("projects");

  try {
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await db("projects").where({ id });

  try {
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id/tasks", async (req, res) => {
  const { id } = req.params;
  const tasks = await db("tasks").where({ project_id: id });

  try {
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id/resources", async (req, res) => {
  const { id } = req.params;
  const resources = await db("resources").where({ project_id: id });

  try {
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const project = await db("projects").insert(body);

  try {
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/:id/tasks", async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const task = await db("tasks")
    .insert(body)
    .where({ project_id: id });

  try {
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/:id/resources", async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const resource = await db("resources")
    .insert(body)
    .where({ project_id: id });

  try {
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
