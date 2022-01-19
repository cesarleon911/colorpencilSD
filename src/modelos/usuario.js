const {Schema, model} = require('mongoose');

const UsuariosSchema = new Schema({
    device: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('Usuarios', UsuariosSchema);

