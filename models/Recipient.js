const mongoose = required('mongoose');
const { Schema } = mongoose;

const RecipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
})
module.exports = RecipientSchema;