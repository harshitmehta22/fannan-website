var mongoose = require('mongoose');

const StateSchema = mongoose.Schema({
    name: { type: String, required: false, default: "" },
    created_at: { type: Number,required: true, default: new Date().getTime() },
    updated_at: { type: Number, required: false,default: new Date().getTime() },
});

module.exports = mongoose.model('state', StateSchema);