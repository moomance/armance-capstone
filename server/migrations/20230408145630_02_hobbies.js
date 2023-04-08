/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("hobbies", (table) => {
    table.increments("id").primary();
    table.string("name", 50).notNullable();
    table.string("icon", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("hobbies");
};
