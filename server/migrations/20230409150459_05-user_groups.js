/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_groups", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("userId")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("group_id")
      .unsigned()
      .references("groupId")
      .inTable("group_details")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user_groups");
};
