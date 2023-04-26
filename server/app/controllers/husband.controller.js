const db = require("../models");
const Husband = db.husband;
const Wife = db.wife;
const Op = db.Sequelize.Op;

// Create and Save a new Husband
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Husband
  const husband = {
    name: req.body.name,
    age: req.body.age,
    wifeID: req.body.wifeID
  };

  // Save Husband in the database
  Husband.create(husband)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Husband."
      });
    });
};

exports.getHusbandWifeName = async (req, res) => {
  const { id } = req.params;

  try {
    const husband = await Husband.findByPk(id, {
      include: [{ model: Wife, attributes: ['name'] }]
    });

    if (!husband) {
      return res.status(404).json({ error: 'Husband not found' });
    }

    // const { name } = husband.wife;

    // return res.json({ name });
    res.json(husband);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};