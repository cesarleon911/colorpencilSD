const AccCtrl = {};

const Accesorio = require('../modelos/accesorios');

AccCtrl.renderACCForm = async (req,res) => {
    const accesorios = await Accesorio.find().lean();
    res.render('destinos/accesorios', {accesorios});
}

AccCtrl.createNewAcc = async (req, res) => {
    const {
        accid,
        nombre,
        imagen,
        personaid,
        versionid
    } = req.body;

    const acc =  new Accesorio(
        {   acc_id: accid,
            acc_name: nombre,
            acc_svg: imagen,
            graphic_line_id: versionid,
            character_id: personaid,
        });


    await acc.save();
    res.redirect('/accesorios');
}

AccCtrl.DeleteAcc = async (req,res) => {
    await Accesorio.findByIdAndDelete(req.params.id);
    res.redirect('/accesorios');
}

module.exports = AccCtrl;