const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const Override = require('method-override');

//inicializadores
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'vistas'));
app.engine('.hbs', engine({
    
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(Override('_method'));

//variables globales

//rutas
app.use(require('./rutas/accesorios.routes'));
app.use(require('./rutas/colorimetria.routes'));
app.use(require('./rutas/emociones.routes'));
app.use(require('./rutas/partes.routes'));
app.use(require('./rutas/personajes.routes'));
app.use(require('./rutas/usuarios.routes'));
app.use(require('./rutas/versiones.routes'));
app.use(require('./rutas/api.routes'));



//variables estaticas
app.use(express.static(path.join(__dirname,'publico')));


module.exports = app;