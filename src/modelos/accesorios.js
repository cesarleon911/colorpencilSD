const {Schema, model} = require('mongoose');

const AccesoriosSchema = new Schema({
    acc_id: Number,
    acc_name: String,
    acc_svg: String,
    graphic_line_id: {
        type: Number,
        required: true
    },
    character_id: {
        type: Number,
        required: true
    }
});

module.exports = model('Accesorios', AccesoriosSchema);

