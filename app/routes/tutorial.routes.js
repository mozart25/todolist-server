module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const uploadController = require("../controllers/upload.controller.js");
    const upload = require("../middleware/upload");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    // // upload
    // router.post("/upload", controllers.upload);
    // // list files
    // router.get("/files", controllers.getListFiles);
    // // download files
    // router.get("/files/:name", controllers.download);

    router.post("/upload", upload.single("file"), uploadController.uploadFiles);


    app.use('/api/tutorials', router);
    // app.use(router);

};