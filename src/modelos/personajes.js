const {Schema, model} = require('mongoose');

const PersonajesSchema = new Schema({
    character_id: {
        type: Number,
        required: true
    },
    character_name:{
        type: String,
        required: true
    },
    url_ref: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('Personajes', PersonajesSchema);