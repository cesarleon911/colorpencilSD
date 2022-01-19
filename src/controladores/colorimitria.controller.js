const AccCtrl = {};

const Color = require('../modelos/colorimetria');

AccCtrl.renderColorForm = async (req,res) => {
    const colores = await Color.find().lean();
    res.render('destinos/color', {colores});
}

AccCtrl.createNewColor = async (req, res) => {
    const {
        identi,
        personaid,
        versionid,
        parte,
        color
    } = req.body;

    const col =  new Color(
        {   device: identi,
            graphic_line_id: versionid,
            character_id: personaid,
            part_id: parte,
            color: color
        });


    await col.save();
    res.redirect('/colores');
}

AccCtrl.DeleteColor = async (req,res) => {
    await Color.findByIdAndDelete(req.params.id);
    res.redirect('/colores');
}


module.exports = AccCtrl;