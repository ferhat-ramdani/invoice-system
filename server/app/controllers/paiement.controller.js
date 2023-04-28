const db = require("../models");
const Paiement = db.paiement;

// post | /paiements
exports.create = (req, res) => {
  if (!req.body.IBAN) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const paiement = {
    id: req.body.id,
    domiciliation: req.body.domiciliation,
    proprietaire: req.body.proprietaire,
    IBAN: req.body.IBAN,
    BIC_SWIFT: req.body.BIC_SWIFT,
  };

  Paiement.create(paiement)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the paiement."
      });
    });
};

// delete | /paiements/:id
exports.delete = (req, res) => {
  const id = req.params.id;

  Paiement.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Paiement was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete paiement with id=${id}. Maybe paiement was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete paiement with id=" + id
      });
    });
}

// put | /paiements/:id
exports.update = (req, res) => {
  const id = req.params.id;

  Paiement.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Paiement was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update paiement with id=${id}. Maybe paiement was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating paiement with id=" + id
      });
    });
};