const { validationResult } = require("express-validator");

module.exports = {
    index (req, res) {
        if(req.session.name){
            console.log('session desde index', req.session)
            
            let data = req.session
             return res.render('index', {data})
        }
        res.render('index');

    },
    store (req, res) {

        // atrapamos los errores de validación, con validationResult(req)
        const errors = validationResult(req)  
    
        //preguntamos si hay errores de validación
        if(!errors.isEmpty()) {
            return res.render('index', { errors: errors.errors, old: req.body })
        }   

        if(req.body.recordar_color){
            res.cookie('color', req.body.color, { maxAge: 60000 })
        }

        req.session.name = req.body.name;
        req.session.email = req.body.email;
        req.session.color = req.body.color;
        req.session.edad = req.body.edad;
        req.session.cualquierCosa = 'cualquiercosa';

        console.log('Req.session desde el controlador store',req.session);
        
        //si no hay errores, mandamos data con el req.body
        res.redirect('/')
    },

    color (req, res) {
        if(req.session.name){
            let data = req.session;
            const color = req.cookies.color;
            res.render('color', { color,data });
        }
        res.render('color')
    },

    olvidar (req, res){
        res.cookie('color', '', { maxAge: -1 });
        res.redirect('/');
    }
    
}







