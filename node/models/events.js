const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const eventSchema = new Schema({
    eventName: String,
    eventDescription: String,
    eventDuration: Number,
    eventLocation: String,
    eventFees: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    registerUser :Array,
    isEditable: {type:Boolean , default : true}
});

module.exports = mongoose.model("event", eventSchema);
