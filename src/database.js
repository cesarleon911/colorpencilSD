const mongoose = require('mongoose');


const URI = `mongodb+srv://AdminLeonidas:HgU0mT2OhS75j0sy@iriscommerce.srdr5.mongodb.net/colorpencilsd?retryWrites=true&w=majority`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(db => console.log('Base de datos Conectada'))
.catch(err => console.log(err))
