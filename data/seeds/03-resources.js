exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "1 res", description: "1 res desc" },
    { name: "2 res", description: "2 res desc" },
    { name: "3 res", description: "3 res desc" }
  ]);
};
