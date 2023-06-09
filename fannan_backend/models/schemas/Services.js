var mongoose = require('mongoose');
const ServicesSchema = mongoose.Schema({
    //image: { type: Array, required: false, default: "" },
    name: { type: String, required: false, default: "" },
    description: { type: String, required: false, default: "" },
    price: { type: String, required: false, default: "" },
    status: { type: Number, required: false },
    // status: { type: Number, required: true, default: 1 },
     categories_id: { type: mongoose.Schema.Types.ObjectId, required: false },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: false },
    created_at: { type: Number,required: true, default: new Date().getTime() },
   updated_at: { type: Number, required: false,default: new Date().getTime() },
});
module.exports = mongoose.model('services', ServicesSchema);