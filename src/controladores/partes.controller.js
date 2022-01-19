const ParteCtrl = {};

const Partes = require('../modelos/partes');

ParteCtrl.renderPartForm = async (req,res) => {
    const parets = await Partes.find().lean();
    res.render('destinos/partes', {parets});
}

ParteCtrl.createNewPart = async (req, res) => {
    const {
        parteid,
        nombre,
        imagen,
        personaid,
        versionid
    } = req.body;

    const parte =  new Partes(
        {   part_id: parteid,
            part_name: nombre,
            part_svg: imagen,
            graphic_line_id: versionid,
            character_id: personaid,
        });

    await parte.save();
    res.redirect('/partes');
}

ParteCtrl.DeleteParte = async (req,res) => {
    await Partes.findByIdAndDelete(req.params.id);
    res.redirect('/partes');
}

module.exports = ParteCtrl;