const express = require('express');
const router = express.Router();

// Item Model
const {
    User
} = require('../../models/User');

router.post('/register', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        lastname: req.body.lastname,
        password: req.body.password

    })
    newUser.save().then((user) => res.json(user));
})

module.exports = router;