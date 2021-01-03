// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// All functions
const burger = {

// Select All
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },

  // Add
  insert: function (name, cb){
    orm.insert("burger", "name", name, function (res) {
      cb(res);
    });
  },

  // Update
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // Delete
  delete: function(id, cb) {
    orm.deleteOne("burger", id, cb);
  },

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },

  
};

// Export the database functions for the controller
module.exports = burger;
