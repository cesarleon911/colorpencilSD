const personajeCtrl = {};

const personaje = require('../modelos/personajes');

personajeCtrl.renderPersonajeForm = async (req,res) => {
    const personajes = await personaje.find().lean();
    res.render('destinos/personajes', {personajes});
}

personajeCtrl.createNewPersonaje = async (req, res) => {
    const {
        id,
        nombre,
        url_ref,
    } = req.body;

    const perso =  new personaje(
        {   character_id: id,
            character_name: nombre,
            url_ref: url_ref
        });

    await perso.save();
    res.redirect('/personajes');
}

personajeCtrl.deletePersonaje = async (req,res) => {
    await personaje.findByIdAndDelete(req.params.id);
    res.redirect('/personajes');
}

module.exports = personajeCtrl;