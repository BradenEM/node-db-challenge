const cleaner = require("knex-cleaner");

exports.seed = async function(knex) {
  return cleaner.clean(knex, {
    ingoreTables: ["knex_migrations", "knex_migrations_lock"]
  });
};
