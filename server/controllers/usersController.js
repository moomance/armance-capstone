const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

exports.getAll = (_req, res) => {
  knex("users")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving hobbies ${err}`));
};

exports.getSingle = (req, res) => {
  knex("users")
    .select(
      "id",
      "name",
      "location",
      "avatar",
      "bio",
      "language1",
      "language2",
      "language3"
    )
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id: ${req.params.id} is not found`);
      }
      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving inventory ${req.params.id} ${err}`)
    );
};
