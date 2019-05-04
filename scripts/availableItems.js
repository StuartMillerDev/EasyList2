const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the list below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/easylist");

const ListItemSeeds = {
  Availableitems: [
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
db.Item.remove({})
  .then(() => db.Item.create(ListItemSeeds))
  .then(data => {
    console.log("Item Seed records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
