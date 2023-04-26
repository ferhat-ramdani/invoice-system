module.exports = app => {
    const wives = require("../controllers/wife.controller");
    const husbands = require("../controllers/husband.controller");
  
    var router = require("express").Router();
  
    // Create a new Wife
    router.post("/wives", wives.create);

    // Create a new Husband
    router.post("/husbands", husbands.create);

    // Retrieve favourite fruit of single Wife with id
    router.get("/wives/:id", wives.favouriteFruit);

    // Retrieve wife's name from husband id
    router.get("/husband-wife/:id", husbands.getHusbandWifeName);
  
    // // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/family', router);
  };