const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

exports.getAll = (_req, res) => {
  knex("group_details")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving hobbies ${err}`));
};

exports.getSingle = (req, res) => {
  knex("group_details")
    // .join("warehouses", "warehouses.id", "inventories.warehouse_id")
    .select("groupId", "group_name", "group_bio", "group_image")
    .where({ groupId: req.params.id })
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
