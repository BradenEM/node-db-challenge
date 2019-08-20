exports.seed = function(knex) {
  return knex("tasks").insert([
    { description: "1 task desc", notes: "1 task notes", project_id: 1 },
    { description: "2 task desc", notes: "2 task notes", project_id: 2 },
    { description: "3 task desc", notes: "3 task notes", project_id: 3 }
  ]);
};
