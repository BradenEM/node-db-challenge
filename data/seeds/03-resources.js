exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "1 res", description: "1 res desc", project_id: 1 },
    { name: "2 res", description: "2 res desc", project_id: 2 },
    { name: "3 res", description: "3 res desc", project_id: 3 }
  ]);
};
