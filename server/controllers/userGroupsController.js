const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

// exports.getAll = (_req, res) => {
//   knex("user_groups")
//     .join()
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => res.status(400).send(`Error retrieving hobbies ${err}`));
// };

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

exports.getAll = (req, res) => {
  console.log(req.params);
  knex
    .select(
      "user_id",
      "group_id",
      "groupId",
      "group_image",
      "group_name",
      "group_location",
      "group_bio",
      "group_language",
      "group_hobby",
      "name",
      "avatar"
    )
    .from("user_groups")
    .where({ group_id: req.params.group_id })
    .join("users", "user_groups.user_id", "=", "users.userId")
    .join("group_details", "user_groups.group_id", "=", "group_details.groupId")
    .then((data) => {
      res.status(200).json(data);
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send(error);
    });
};
