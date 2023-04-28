const db = require("../models");
const Client = db.client;

// post | /clients
exports.create = (req, res) => {
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const client = {
    code: req.body.code,
    nom: req.body.nom,
    adresse: req.body.adresse,
    SIRET: req.body.SIRET,
    NAF_APE: req.body.NAF_APE,
    numTVA: req.body.numTVA,
    capital: req.body.capital
  };

  Client.create(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the client."
      });
    });
};

// delete | /clients/:code
exports.delete = (req, res) => {
  const code = req.params.code;

  Client.destroy({
    where: { code: code }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete client with code=${code}. Maybe client was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete client with code=" + code
      });
    });
}

// put | /clients/:code
exports.update = (req, res) => {
  const code = req.params.code;

  Client.update(req.body, {
    where: { code: code }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update client with code=${code}. Maybe client was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating client with code=" + code
      });
    });
};

// get | /clients
exports.getAllClients = (req, res) => {
  Client.findAll({
    attributes: ['code', 'nom', 'adresse', 'SIRET', 'NAF_APE', 'numTVA', 'capital'],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    });
}

// get | /clients/:code
exports.getClient = (req, res) => {
  const code = req.params.code;

  Client.findByPk(code)
  .then((produit) => {
    if (!produit) {
      res.status(404).send({ message: "Client not found" });
    } else {
      res.status(200).send(produit);
    }
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
}