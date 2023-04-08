/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("name", 50).notNullable();
    table.string("location", 100);
    table.string("avatar", 255);
    table.string("bio", 500);
    table.string("language1", 50);
    table.string("language2", 50);
    table.string("language3", 50);
    table.string("language4", 50);
    table.string("language5", 50);
    table.string("language6", 50);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
