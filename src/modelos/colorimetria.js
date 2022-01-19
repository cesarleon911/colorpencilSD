const {Schema, model} = require('mongoose');

const ColorimetiraSchema = new Schema({
    device: {
        type: String,
        required: true
    },
    character_id: {
        type: Number,
        required: true
    },
    graphic_line_id: {
        type: Number,
        required: true
    },
    part_id: {
        type: Number,
        required: true
    },
    color:{
        type: String,
        required: true
    }
});

module.exports = model('Colorimetria', ColorimetiraSchema);

