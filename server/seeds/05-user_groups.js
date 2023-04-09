/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("user_groups").del();
  await knex("user_groups").insert([
    {
      user_id: 1,
      group_id: 25,
    },
    {
      user_id: 1,
      group_id: 8,
    },
    {
      user_id: 1,
      group_id: 2,
    },
    {
      user_id: 2,
      group_id: 14,
    },
    {
      user_id: 2,
      group_id: 21,
    },
    {
      user_id: 2,
      group_id: 7,
    },
    {
      user_id: 2,
      group_id: 28,
    },
    {
      user_id: 2,
      group_id: 33,
    },
    {
      user_id: 3,
      group_id: 3,
    },
    {
      user_id: 3,
      group_id: 26,
    },
    {
      user_id: 3,
      group_id: 32,
    },
    {
      user_id: 4,
      group_id: 31,
    },
    {
      user_id: 4,
      group_id: 15,
    },
    {
      user_id: 4,
      group_id: 8,
    },
    {
      user_id: 5,
      group_id: 4,
    },
    {
      user_id: 5,
      group_id: 23,
    },
    {
      user_id: 5,
      group_id: 17,
    },
    {
      user_id: 5,
      group_id: 29,
    },
    {
      user_id: 6,
      group_id: 5,
    },
    {
      user_id: 6,
      group_id: 12,
    },
    {
      user_id: 6,
      group_id: 18,
    },
    {
      user_id: 6,
      group_id: 30,
    },
    {
      user_id: 7,
      group_id: 15,
    },
    {
      user_id: 7,
      group_id: 8,
    },
    {
      user_id: 7,
      group_id: 25,
    },
    {
      user_id: 8,
      group_id: 22,
    },
    {
      user_id: 8,
      group_id: 10,
    },
    {
      user_id: 8,
      group_id: 29,
    },
    {
      user_id: 9,
      group_id: 6,
    },
    {
      user_id: 9,
      group_id: 13,
    },
    {
      user_id: 9,
      group_id: 19,
    },
    {
      user_id: 9,
      group_id: 27,
    },
    {
      user_id: 10,
      group_id: 26,
    },
    {
      user_id: 10,
      group_id: 11,
    },
    {
      user_id: 10,
      group_id: 16,
    },
    {
      user_id: 10,
      group_id: 32,
    },
    {
      user_id: 11,
      group_id: 1,
    },
    {
      user_id: 11,
      group_id: 28,
    },
    {
      user_id: 11,
      group_id: 21,
    },
    {
      user_id: 11,
      group_id: 14,
    },
    {
      user_id: 11,
      group_id: 33,
    },
    {
      user_id: 12,
      group_id: 18,
    },
    {
      user_id: 12,
      group_id: 30,
    },
    {
      user_id: 12,
      group_id: 5,
    },
    {
      user_id: 12,
      group_id: 12,
    },
    {
      user_id: 13,
      group_id: 6,
    },
    {
      user_id: 13,
      group_id: 13,
    },
    {
      user_id: 13,
      group_id: 20,
    },
    {
      user_id: 14,
      group_id: 3,
    },
    {
      user_id: 14,
      group_id: 9,
    },
    {
      user_id: 14,
      group_id: 11,
    },
    {
      user_id: 14,
      group_id: 16,
    },
    {
      user_id: 15,
      group_id: 8,
    },
    {
      user_id: 15,
      group_id: 15,
    },
    {
      user_id: 15,
      group_id: 31,
    },
    {
      user_id: 16,
      group_id: 22,
    },
    {
      user_id: 16,
      group_id: 10,
    },
    {
      user_id: 16,
      group_id: 4,
    },
    {
      user_id: 16,
      group_id: 23,
    },
    {
      user_id: 17,
      group_id: 5,
    },
    {
      user_id: 17,
      group_id: 24,
    },
    {
      user_id: 17,
      group_id: 18,
    },
    {
      user_id: 17,
      group_id: 30,
    },
    {
      user_id: 18,
      group_id: 1,
    },
    {
      user_id: 18,
      group_id: 7,
    },
    {
      user_id: 18,
      group_id: 28,
    },
    {
      user_id: 19,
      group_id: 6,
    },
    {
      user_id: 19,
      group_id: 13,
    },
    {
      user_id: 19,
      group_id: 20,
    },
    {
      user_id: 20,
      group_id: 29,
    },
    {
      user_id: 20,
      group_id: 17,
    },
    {
      user_id: 20,
      group_id: 22,
    },
  ]);
};
