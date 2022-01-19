const {Schema, model} = require('mongoose');

const VersionesSchema = new Schema({

    graphic_line_id: {
        type: Number,
        required: true
    },
    graphic_line_name:{
        type: String,
        required: true
    },
    graphic_line_image: {
        type: String,
        required: true
    },
    character_id: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('Versiones', VersionesSchema);
