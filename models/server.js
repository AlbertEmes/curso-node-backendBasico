const express = require('express')
const cors = require('cors')

const app = express()

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';


        //Middlewares
        this.middelwares();

        //lectura y parseo del body
        this.app.use(express.json());

        //Rutas de la app
        this.routes();
    }

    middelwares(){

        
        //cors
        this.app.use(app.use(cors()));

        //Directorio publico
        this.app.use(express.static('public'));



    }

    routes(){

        this.app.use(this.usuarioPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, ()=>{

        });
    }
}


module.exports = Server;