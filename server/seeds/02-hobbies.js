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
      name: "Photography",
      icon: "U+1F4F8",
    },
    {
      id: 2,
      name: "Hiking",
      icon: "U+1F97E",
    },
    {
      id: 3,
      name: "Cooking",
      icon: "U+1F373",
    },
    {
      id: 4,
      name: "Painting",
      icon: "U+1F3A8",
    },
    {
      id: 5,
      name: "Gaming",
      icon: "U+1F3AE",
    },
    {
      id: 6,
      name: "Yoga",
      icon: "U+1F9D8",
    },
    {
      id: 7,
      name: "Music",
      icon: "U+1F3A7",
    },
    {
      id: 8,
      name: "Dancing",
      icon: "U+1F57A",
    },
    {
      id: 9,
      name: "Board Games",
      icon: "U+265F",
    },
    {
      id: 10,
      name: "Drinking",
      icon: "U+1F37A",
    },
    {
      id: 11,
      name: "Sports",
      icon: "U+1F3C8",
    },
    {
      id: 12,
      name: "Movies",
      icon: "U+1F4FD",
    },
  ]);
};
