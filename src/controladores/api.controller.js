const AccCtrl = {};

const color = require('../modelos/colorimetria');

const Personaje = require('../modelos/personajes');
const Version = require('../modelos/versiones');
const Parte = require('../modelos/partes');
const Acc = require('../modelos/accesorios');
const Emo = require('../modelos/emociones');


AccCtrl.apiColores = async (req,res) => {
    const colores = await color.find().lean();
    res.json(colores);
}

AccCtrl.apiData = async (req, res) => {
    const personajes = await Personaje.find().lean();
    const versiones = await Version.find().lean();
    const partes = await Parte.find().lean();
    const accesorios = await Acc.find().lean();
    const emociones = await Emo.find().lean();

    var per = [];
    for (x of personajes) {
        var  persona= {};
        persona.character_id = x.character_id;
        persona.character_name = x.character_name;
        persona.url_ref = x.url_ref;
        
        var version=[];
        for(y of versiones){
            var versi={};
            if(y.character_id == x.character_id){
                versi.graphic_line_id = y.graphic_line_id;
                versi.graphic_line_name  = y.graphic_line_name;
                versi.graphic_line_image  = y.graphic_line_image;
                version.push(versi);
            }
        }
        persona.graphic_lines = version;
        per.push(persona);
    }


    var respuesta = {};
    respuesta.data = per;

    res.json(respuesta);
}


module.exports = AccCtrl;