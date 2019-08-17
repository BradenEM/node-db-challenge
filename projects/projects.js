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
  const resources = await db("resources as r")
    .join("project_resources as pr", "r.id", "pr.resource_id")
    .select("r.name", "r.description")
    .where({ "pr.project_id": id });

  try {
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
