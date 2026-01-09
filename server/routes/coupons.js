const express = require('express');
const router = express.Router();
const Coupon = require('../models/Coupon');

// @route   POST api/coupons/validate
// @desc    Validate a coupon code
// @access  Public
router.post('/validate', async (req, res) => {
    const { code, clientType } = req.body;

    try {
        const coupon = await Coupon.findOne({ code, isActive: true });

        if (!coupon) {
            return res.status(404).json({ msg: 'Invalid Coupon Code' });
        }

        if (coupon.expiryDate && coupon.expiryDate < Date.now()) {
            return res.status(400).json({ msg: 'Coupon Expired' });
        }

        if (coupon.clientTypeAllowed !== 'all' && coupon.clientTypeAllowed !== clientType) {
            return res.status(400).json({ msg: `This coupon is only for ${coupon.clientTypeAllowed} clients` });
        }

        res.json({
            valid: true,
            discountPercent: coupon.discountPercent,
            msg: 'Coupon Applied!'
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/coupons/create (Admin only - simplified for now)
router.post('/create', async (req, res) => {
    const { code, discountPercent, clientTypeAllowed, expiryDate } = req.body;
    try {
        const newCoupon = new Coupon({ code, discountPercent, clientTypeAllowed, expiryDate });
        await newCoupon.save();
        res.json(newCoupon);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
