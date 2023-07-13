
const {response, request} = require('express')

const usuariosGet = (req = request, res = response)=>{
    
    const params = req.query;

    res.json({
        msg: 'get API-controlador',
        params

    });
}

const usuariosPost = (req, res = response)=>{
    

    const {nombre, apellido} = req.body;

    res.json({
        msg: 'post API-controlador',
        nombre,
        apellido
    });
}

const usuariosPut = (req, res = response)=>{
    
    const id = req.params.id;

    res.status(401).json({
        msg: 'put API-controlador',
        id  
    });
}

const usuariosDelete = (req, res = response)=>{
    
    res.status(401).json({
        msg: 'delete API-controlador'  
    });
}

const usuariosPatch = (req, res = response)=>{
    
    res.status(401).json({
        msg: 'patch API-controlador'  
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}