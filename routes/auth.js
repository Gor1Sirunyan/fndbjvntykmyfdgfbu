var express = require('express');
var router = express.Router();
const models = require('../models');
const bcrypt = require('bcrypt');

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Express'});
});
router.post('/login', function (req, res, next) {
    let ses=req.session;
    let email = req.body.email;
    let password = req.body.password;
    models.CV.findOne({
        where:{ email: ((email) ? email : '')}
    })
        .then((user) => {
            if(!user){
                return res.render('login', {message: "User not found!"})
            }
            else{
                if(bcrypt.compareSync(password, user.password)){

                   ses.email=user.email;
                    return res.redirect('/users/dashboard');
                }
                else{
                    return res.render('login', {email: email, message: "Password incorrect!"})
                }
            }
        })
        .catch((err) => {
            res.send(err.message)
        });
});

module.exports = router;