const versionesCtrl = {};

const version =  require('../modelos/versiones');

versionesCtrl.renderVersionForm = async (req,res) => {
    const versiones = await version.find().lean();
    res.render('destinos/versiones', {versiones});
}

versionesCtrl.createNewVer = async (req, res) => {
    const {
        versionid,
        nombre,
        url_ref,
        personaid
    } = req.body;

    const ver =  new version(
        {  
            graphic_line_id: versionid,
            graphic_line_name: nombre,
            graphic_line_image: url_ref,
            character_id: personaid
        });

    await ver.save();
    res.redirect('/versiones');
}

versionesCtrl.deleteVer = async (req,res) => {
    await version.findByIdAndDelete(req.params.id);
    res.redirect('/versiones');
}



module.exports = versionesCtrl;