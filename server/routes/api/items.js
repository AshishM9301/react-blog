const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// Get api/item
// Get All Items
// Public
router.get('/', (req, res) => {
  Item.find()
    .sort({
      date: -1,
    })
    .then((items) => res.json(items));
});

// Post api/items
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

module.exports = router;
