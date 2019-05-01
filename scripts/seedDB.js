const mongoose = require("mongoose");
const db = require("../models");

// This file empties the List collection and inserts the list below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/easylist");

const listSeed = {
  listName: "Default",
  listItems: [
    {
      name: "2% Milk",
      category: "Dairy",
      isChecked: false
    },
    {
      name: "Bread",
      category: "Bread",
      isChecked: false
    },
    {
      name: "Eggs",
      category: "Dairy",
      isChecked: false
    },
    {
      name: "Chicken Tenders",
      category: "Meat",
      isChecked: false
    },
    {
      name: "Soap",
      category: "Personal Care",
      isChecked: false
    }
  ]
};

// Cear out the database and insert from seed.
db.List.remove({})
  .then(() => db.List.create(listSeed))
  .then(data => {
    console.log("Seed records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
