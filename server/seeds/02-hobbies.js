/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("hobbies").del();
  await knex("hobbies").insert([
    {
      id: 1,
      hobby: "Photography",
      icon: "U+1F4F8",
    },
    {
      id: 2,
      hobby: "Hiking",
      icon: "U+1F97E",
    },
    {
      id: 3,
      hobby: "Cooking",
      icon: "U+1F373",
    },
    {
      id: 4,
      hobby: "Painting",
      icon: "U+1F3A8",
    },
    {
      id: 5,
      hobby: "Gaming",
      icon: "U+1F3AE",
    },
    {
      id: 6,
      hobby: "Yoga",
      icon: "U+1F9D8",
    },
    {
      id: 7,
      hobby: "Music",
      icon: "U+1F3A7",
    },
    {
      id: 8,
      hobby: "Dancing",
      icon: "U+1F57A",
    },
    {
      id: 9,
      hobby: "Board Games",
      icon: "U+265F",
    },
    {
      id: 10,
      hobby: "Drinking",
      icon: "U+1F37A",
    },
    {
      id: 11,
      hobby: "Sports",
      icon: "U+1F3C8",
    },
    {
      id: 12,
      hobby: "Movies",
      icon: "U+1F4FD",
    },
  ]);
};
