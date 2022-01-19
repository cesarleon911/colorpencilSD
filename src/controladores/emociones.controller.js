const EmoCtrl = {};

const Emocion = require('../modelos/emociones');

EmoCtrl.renderEmoForm = async (req,res) => {
    const emociones = await Emocion.find().lean();
    res.render('destinos/emocion', {emociones});
}

EmoCtrl.createNewEmo = async (req, res) => {
    const {
        emoid,
        nombre,
        imagen,
        personaid,
        versionid
    } = req.body;

    const emo =  new Emocion(
        {   emot_id: emoid,
            emot_name: nombre,
            emot_svg: imagen,
            graphic_line_id: versionid,
            character_id: personaid,
        });

    await emo.save();
    res.redirect('/emociones');
}

EmoCtrl.DeleteEmo = async (req,res) => {
    await Emocion.findByIdAndDelete(req.params.id);
    res.redirect('/emociones');
}


module.exports = EmoCtrl;