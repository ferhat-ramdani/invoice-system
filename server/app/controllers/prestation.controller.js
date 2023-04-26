const db = require("../models");
const Prestation = db.prestation;

// post | prestations
exports.create = (req, res) => {
  if (!req.body.codeClient) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const prestation = {
    id: req.body.id,
    codeClient: req.body.codeClient,
    statut: req.body.statut
  };

  Prestation.create(prestation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the prestation."
      });
    });
};

// delete | prestations/:id
exports.delete = (req, res) => {
  const id = req.params.id;

  Prestation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Prestation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete prestation with id=${id}. Maybe prestation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete prestation with id=" + id
      });
    });
}

// put | prestations/:id
exports.update = (req, res) => {
  const id = req.params.id;

  Prestation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Prestation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update prestation with id=${id}. Maybe prestation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating prestation with id=" + id
      });
    });
};