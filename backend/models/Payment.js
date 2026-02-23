const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Payment schema
const paymentSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    month: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paidDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['paid', 'not paid'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Payment model
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;