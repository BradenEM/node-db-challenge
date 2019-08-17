exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 128);
      tbl.boolean("completed").defaultTo(0);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description", 128).notNullable();
      tbl.string("notes", 128);
      tbl.boolean("completed").defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id");
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 128);
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id");
      tbl
        .integer("resource_id")
        .notNullable()
        .unsigned()
        .references("resources.id");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
