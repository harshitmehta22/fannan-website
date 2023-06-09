var mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
    name: { type: String, required: false, default: "" },
    countryCode: { type: Number, required: false, default: "" },
    // status: { type: Number, required: true, default: 1 },
    created_at: { type: Number,required: true, default: new Date().getTime() },
    updated_at: { type: Number, required: false,default: new Date().getTime() },
});

module.exports = mongoose.model('country', CountrySchema);