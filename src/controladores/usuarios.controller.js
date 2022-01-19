const usuarioCtrl = {};

const usuario = require('../modelos/usuario')

usuarioCtrl.renderUserForm = async (req,res) => {
    const usuarios = await usuario.find().lean();
    res.render('destinos/usuarios', {usuarios});
}

usuarioCtrl.createNewUser = async (req, res) => {
    const {
        nombre
    } = req.body;

    const user =  new usuario(
        {   device: nombre
        });

    await user.save();
    res.redirect('/usuario');
}

usuarioCtrl.deleteUser = async (req,res) => {
    await usuario.findByIdAndDelete(req.params.id);
    res.redirect('/usuario');
}

module.exports = usuarioCtrl;