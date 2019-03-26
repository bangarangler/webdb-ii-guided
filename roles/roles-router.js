const router = require("express").Router();
const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./Data/Roles.db3"
  }
};

const db = knex(knexConfig);

router.get("/", (req, res) => {
  // get the roles from the database
  db("roles")
    .then(roles => {
      res.status(200).json(roles);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // retrieve a role by id
  const { id } = req.params;
  db("roles")
    .where({ id: id })
    .first()
    .then(role => {
      res.status(200).json(role);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // add a role to the database
  res.send("Write code to add a role");
});

router.put("/:id", (req, res) => {
  // update roles
  res.send("Write code to modify a role");
});

router.delete("/:id", (req, res) => {
  // remove roles (inactivate the role)
  res.send("Write code to remove a role");
});

module.exports = router;
