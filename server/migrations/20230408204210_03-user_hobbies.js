/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_hobbies", function (table) {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("userId")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("hobby_id")
      .unsigned()
      .references("id")
      .inTable("hobbies")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user_hobbies");
};
