/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_hobbies").del();
  await knex("user_hobbies").insert([
    {
      user_id: 1,
      hobby_id: 1,
    },
    {
      user_id: 1,
      hobby_id: 8,
    },
    {
      user_id: 1,
      hobby_id: 2,
    },
    {
      user_id: 2,
      hobby_id: 10,
    },
    {
      user_id: 2,
      hobby_id: 7,
    },
    {
      user_id: 2,
      hobby_id: 6,
    },
    {
      user_id: 3,
      hobby_id: 3,
    },
    {
      user_id: 3,
      hobby_id: 7,
    },
    {
      user_id: 3,
      hobby_id: 8,
    },
    {
      user_id: 4,
      hobby_id: 11,
    },
    {
      user_id: 4,
      hobby_id: 8,
    },
    {
      user_id: 4,
      hobby_id: 7,
    },
    {
      user_id: 5,
      hobby_id: 4,
    },
    {
      user_id: 5,
      hobby_id: 11,
    },
    {
      user_id: 5,
      hobby_id: 3,
    },
    {
      user_id: 6,
      hobby_id: 5,
    },
    {
      user_id: 6,
      hobby_id: 12,
    },
    {
      user_id: 6,
      hobby_id: 11,
    },
    {
      user_id: 7,
      hobby_id: 7,
    },
    {
      user_id: 7,
      hobby_id: 8,
    },
    {
      user_id: 7,
      hobby_id: 9,
    },
    {
      user_id: 8,
      hobby_id: 8,
    },
    {
      user_id: 8,
      hobby_id: 10,
    },
    {
      user_id: 8,
      hobby_id: 3,
    },
    {
      user_id: 9,
      hobby_id: 6,
    },
    {
      user_id: 9,
      hobby_id: 10,
    },
    {
      user_id: 9,
      hobby_id: 12,
    },
    {
      user_id: 10,
      hobby_id: 7,
    },
    {
      user_id: 10,
      hobby_id: 10,
    },
    {
      user_id: 10,
      hobby_id: 8,
    },
    {
      user_id: 11,
      hobby_id: 1,
    },
    {
      user_id: 11,
      hobby_id: 6,
    },
    {
      user_id: 11,
      hobby_id: 10,
    },
    {
      user_id: 12,
      hobby_id: 12,
    },
    {
      user_id: 12,
      hobby_id: 5,
    },
    {
      user_id: 12,
      hobby_id: 11,
    },
    {
      user_id: 13,
      hobby_id: 6,
    },
    {
      user_id: 13,
      hobby_id: 12,
    },
    {
      user_id: 13,
      hobby_id: 2,
    },
    {
      user_id: 14,
      hobby_id: 10,
    },
    {
      user_id: 14,
      hobby_id: 9,
    },
    {
      user_id: 14,
      hobby_id: 3,
    },
    {
      user_id: 15,
      hobby_id: 8,
    },
    {
      user_id: 15,
      hobby_id: 7,
    },
    {
      user_id: 15,
      hobby_id: 11,
    },
    {
      user_id: 16,
      hobby_id: 10,
    },
    {
      user_id: 16,
      hobby_id: 8,
    },
    {
      user_id: 16,
      hobby_id: 4,
    },
    {
      user_id: 17,
      hobby_id: 5,
    },
    {
      user_id: 17,
      hobby_id: 1,
    },
    {
      user_id: 17,
      hobby_id: 12,
    },
    {
      user_id: 17,
      hobby_id: 8,
    },
    {
      user_id: 18,
      hobby_id: 6,
    },
    {
      user_id: 18,
      hobby_id: 1,
    },
    {
      user_id: 18,
      hobby_id: 7,
    },
    {
      user_id: 19,
      hobby_id: 6,
    },
    {
      user_id: 19,
      hobby_id: 12,
    },
    {
      user_id: 19,
      hobby_id: 2,
    },
    {
      user_id: 20,
      hobby_id: 3,
    },
    {
      user_id: 20,
      hobby_id: 11,
    },
    {
      user_id: 20,
      hobby_id: 8,
    },
  ]);
};
