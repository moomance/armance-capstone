/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("group_details", (table) => {
    table.increments("groupId").primary();
    table.string("group_name", 50).notNullable();
    table.string("group_image", 255).notNullable();
    table.string("group_location", 50).notNullable();
    table.string("group_bio", 255).notNullable();
    table.string("group_language", 50).notNullable();
    table.string("group_hobby", 50).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("group_details");
};
