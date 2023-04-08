/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("group_details", (table) => {
    table.increments("id").primary();
    table.string("name", 50).notNullable();
    table.string("image", 255).notNullable();
    table.string("location", 50).notNullable();
    table.string("bio", 255).notNullable();
    table.string("language", 50).notNullable();
    table.string("hobby", 50).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("group_details");
};
