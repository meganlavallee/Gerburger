// Import the model to use its database functions
const burger = require("../models/burger.js");

// Import router
const router = require("express").Router();


// Create all our routes and set up logic within those routes where required.

// Get all data route
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Add new data
router.post("/api/add-burgers", function (req, res) {

  const burger_name = req.body.burger_name;
  burger.insert(burger_name, function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    console.log("Added the burger! Yummy!!!");
  });
});

// Update data
router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devour: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
      console.log("Updated");
    }
  });
});

// Delete data
router.delete("/api/delete-burger/:id", function (req, res) {
  burger.delete(req.params.id, function (err, data) {
    if (err) {
      res.status(500).end();
    } else if (data.affectedRows == 0) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
