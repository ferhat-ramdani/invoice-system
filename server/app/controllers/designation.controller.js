const db = require("../models");
const Designation = db.designation;

// post | /designations
exports.create = (req, res) => {
  if (!req.body.nom) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const designation = {
    id: req.body.id,
    nom: req.body.nom,
    qte: req.body.qte,
    PUHT: req.body.PUHT,
    taux: req.body.taux,
    produitID:  req.body.produitID,
    prestationID:  req.body.prestationID
  };

  Designation.create(designation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the designation."
      });
    });
};

// delete | /designations/:id
exports.delete = (req, res) => {
  const id = req.params.id;

  Designation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Designation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete designation with id=${id}. Maybe designation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete designation with id=" + id
      });
    });
}

// put | /designations/:id
exports.update = (req, res) => {
  const id = req.params.id;

  Designation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Designation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update designation with id=${id}. Maybe designation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating designation with id=" + id
      });
    });
};