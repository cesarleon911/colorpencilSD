const {Schema, model} = require('mongoose');

const EmocionesSchema = new Schema({
    emot_id: Number,
    emot_name: String,
    emot_svg: String,
    graphic_line_id: {
        type: Number,
        required: true
    },
    character_id: {
        type: Number,
        required: true
    }
});

module.exports = model('Emociones', EmocionesSchema);

