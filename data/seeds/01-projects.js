exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    { name: "first project", description: "first description" },
    { name: "2 project", description: "2 description" },
    { name: "3 project", description: "3 description" }
  ]);
};
