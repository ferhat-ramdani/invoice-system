const db = require("../models");
const CategorieTVA = db.categorieTVA;

// post | /categorieTVAs
exports.create = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const categorieTVA = {
    id: req.body.id,
    taux: req.body.taux,
    dateDebut: req.body.dateDebut,
    dateFin: req.body.dateFin,
  };

  CategorieTVA.create(categorieTVA)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the categorieTVA."
      });
    });
};

// delete | /categorieTVAs/:id
exports.delete = (req, res) => {
  const id = req.params.id;

  CategorieTVA.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CategorieTVA was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete categorieTVA with id=${id}. Maybe categorieTVA was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete categorieTVA with id=" + id
      });
    });
}

// put | /categorieTVAs/:id
exports.update = (req, res) => {
  const id = req.params.id;

  CategorieTVA.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CategorieTVA was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update categorieTVA with id=${id}. Maybe categorieTVA was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating categorieTVA with id=" + id
      });
    });
};

// get | /categorieTVAs
exports.getAllTVAs = (req, res) => {
  CategorieTVA.findAll({
    attributes: ['id', 'taux', 'dateDebut', 'dateFin'],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categorieTVA."
      });
    });
}