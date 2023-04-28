const db = require("../models");
const Produit = db.produit;
const CategorieTVA = db.categorieTVA;

// post | /produits
exports.create = (req, res) => {
  if (!req.body.PUHT) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const produit = {
    id: req.body.id,
    nom: req.body.nom,
    PUHT: req.body.PUHT,
    description: req.body.description,
    codeTVA:  req.body.codeTVA
  };

  Produit.create(produit)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the produit."
      });
    });
};

// delete | /produits/:id
exports.delete = (req, res) => {
  const id = req.params.id;

  Produit.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produit was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete produit with id=${id}. Maybe produit was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete produit with id=" + id
      });
    });
}

// put | /produits/:id
exports.update = (req, res) => {
  const id = req.params.id;

  Produit.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update produit with id=${id}. Maybe produit was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating produit with id=" + id
      });
    });
};

// get | /produits
exports.getAllProduits = (req, res) => {
  Produit.findAll({
    attributes: ['id', 'nom', 'PUHT', 'description'],
    include: {
      model: CategorieTVA,
      attributes: ['taux'],
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving produits."
      });
    });
}

// get | /produits/:id
exports.getProduit = (req, res) => {
  const id = req.params.id;

  Produit.findByPk(id)
  .then((produit) => {
    if (!produit) {
      res.status(404).send({ message: "Produit not found" });
    } else {
      res.status(200).send(produit);
    }
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
}