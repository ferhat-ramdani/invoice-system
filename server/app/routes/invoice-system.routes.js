module.exports = app => {
  
  const categorieTVAs = require("../controllers/categorie-tva.controller");
  const produits = require("../controllers/produit.controller");
  const clients = require("../controllers/client.controller");
  const prestations = require("../controllers/prestation.controller");
  const designations = require("../controllers/designation.controller");
  const paiements = require("../controllers/paiement.controller");
  const factures = require("../controllers/facture.controller");

  var router = require("express").Router();
  
  router.post("/categorieTVAs", categorieTVAs.create);
  router.delete("/categorieTVAs/:id", categorieTVAs.delete);
  router.put("/categorieTVAs/:id", categorieTVAs.update);
  router.get("/categorieTVAs", categorieTVAs.getAllTVAs);

  router.post("/produits", produits.create);
  router.delete("/produits/:id", produits.delete);
  router.put("/produits/:id", produits.update);
  router.get("/produits", produits.getAllProduits);
  router.get("/produits/:id", produits.getProduit);

  router.post("/clients", clients.create);
  router.delete("/clients/:code", clients.delete);
  router.put("/clients/:code", clients.update);
  router.get("/clients", clients.getAllClients);
  router.get("/clients/:code", clients.getClient);

  router.post("/prestations", prestations.create);
  router.delete("/prestations/:id", prestations.delete);
  router.put("/prestations/:id", prestations.update);

  router.post("/designations", designations.create);
  router.delete("/designations/:id", designations.delete);
  router.put("/designations/:id", designations.update);

  router.post("/paiements", paiements.create);
  router.delete("/paiements/:id", paiements.delete);
  router.put("/paiements/:id", paiements.update);

  router.post("/factures", factures.create);
  router.delete("/factures/:ref", factures.delete);
  router.put("/factures/:ref", factures.update);
  router.get("/factures/:ref", factures.getFactureWithDetails);
  router.get("/factures", factures.getAllFactures);

  app.use('/api/invoice-system', router);
};