const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

exports.getAll = (_req, res) => {
  knex("user_groups")
    .join()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving hobbies ${err}`));
};

// exports.getAll = (_req, res) => {
//   knex
//     .select("group_name", "bio")
//     .from("users")

//     .join("users", "user_groups.user_id", "=", "users.user_id")
//     .join("groupDetails", "user_groups.group_id", "=", "groupDetails.group_id")
//     .catch((err) =>
//       res.status(400).send(`Error retrieving user-group relationships: ${err}`)
//     );
// };
