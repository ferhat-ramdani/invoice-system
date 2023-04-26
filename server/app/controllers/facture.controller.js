const db = require("../models");
const Facture = db.facture;

// post | factures
exports.create = (req, res) => {
  if (!req.body.ref) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const facture = {
    ref: req.body.ref,
    codeClient: req.body.codeClient,
    nomClient: req.body.nomClient,
    adresseClient: req.body.adresseClient,
    dateFacturation: req.body.dateFacturation,
    dateEcheance: req.body.dateEcheance,
    prestationID: req.body.prestationID,
    paiementID: req.body.paiementID
  };

  Facture.create(facture)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the facture."
      });
    });
};

// delete | factures/:ref
exports.delete = (req, res) => {
  const ref = req.params.ref;

  Facture.destroy({
    where: { ref: ref }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Facture was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete facture with ref=${ref}. Maybe facture was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete facture with ref=" + ref
      });
    });
}

// put | factures/:ref
exports.update = (req, res) => {
  const ref = req.params.ref;

  Facture.update(req.body, {
    where: { ref: ref }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Facture was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update facture with ref=${ref}. Maybe facture was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating facture with ref=" + ref
      });
    });
};