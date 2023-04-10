const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

// exports.getAll = (_req, res) => {
//   knex("user_hobbies")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => res.status(400).send(`Error retrieving hobbies ${err}`));
// };

// exports.getAll = (_req, res) => {
//   knex
//     .select("userId", "hobby", "icon")
//     .from("user_hobbies")
//     .join("users", "user_hobbies.user_id", "=", "users.userId")
//     .join("hobbies", "user_hobbies.hobby_id", "=", "hobbies.id")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     })
//     .finally(() => {
//       knex.destroy();
//     });
// };

exports.getAll = (req, res) => {
  console.log(req.params);
  knex
    .select(
      "user_id",
      "hobby_id",
      "hobby",
      "icon",
      "avatar",
      "name",
      "bio",
      "language1",
      "language2",
      "language3",
      "location"
    )
    .from("user_hobbies")
    .where({ user_id: req.params.user_id })
    .join("users", "user_hobbies.user_id", "=", "users.userId")
    .join("hobbies", "user_hobbies.hobby_id", "=", "hobbies.id")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send(`Error retrieving user hobbies ${err}`);
    });
};
