const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, company, requirement, budget } = req.body;

    if (!name || !email || !requirement) {
        return res.status(400).json({ msg: 'Please enter all required fields' });
    }

    try {
        const newContact = new Contact({
            name,
            email,
            company,
            requirement,
            budget
        });

        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
