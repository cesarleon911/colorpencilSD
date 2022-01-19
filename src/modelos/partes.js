const {Schema, model} = require('mongoose');

const PartesSchema = new Schema({
    part_id: {
        type: Number,
        required: true
    },
    part_name:{
        type: String,
        required: true
    }, 
    part_svg:{
        type: String,
        required: true
    }, 
    color: String,
    graphic_line_id: {
        type: Number,
        required: true
    },
    character_id: {
        type: Number,
        required: true
    }
});

module.exports = model('Partes', PartesSchema);

