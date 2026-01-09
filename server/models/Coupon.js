const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    discountPercent: {
        type: Number,
        required: true
    },
    clientTypeAllowed: {
        type: String,
        enum: ['all', 'individual', 'regular'],
        default: 'all'
    },
    expiryDate: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Coupon', couponSchema);
