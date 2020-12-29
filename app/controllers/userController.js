const emailValidator = require('email-validator');

const bcrypt = require('bcrypt');

const { User } = require('../models');

exports.signupPage = (req, res) => {
   
    if(req.session.login) return res.redirect('/');
    else res.render('signup');
}

exports.signup = async (req, res) => {
    try {
    
    if(!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password || !req.body.passwordConfirm) return res.render('signup', {error:'Veuillez remplir tous les champs du formulaire !', fields: req.body});

    if(req.body.password !== req.body.passwordConfirm) return res.render('signup', {error:'Les deux mots de passes doivent etre identiques !', fields: req.body});

    if(!emailValidator.validate(req.body.email)) return res.render('signup', {error: 'Verifiez votre adresse email !', fields:req.body})

    const user = await User.findOne({where:{email:req.body.email}});

    if(user) return res.render('signup', {error:'Cette adresse email est deja prise !', fields:req.body});

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    
    delete req.body.passwordConfirm;
    
    await User.create(req.body);
    console.log('USER CREE !');
    return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

exports.loginPage = (req, res) => {
    
    if(req.session.login) return res.redirect('/');
    else res.render('login');
}

exports.login = async (req, res) => {
    try {
   
    const user = await User.findOne({
        where:{
            email:req.body.email
        }
    })
   
    if(!user) return res.redirect('/login');
  
    if(!bcrypt.compareSync(req.body.password, user.password)) return res.redirect('/login');
    
    req.session.login = new User({
        email: user.email,
        lastname: user.lastname,
        firstname: user.firstname,
        role: user.role
    });

    
    console.log(req.session.login);

    return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

    exports.logout = (req, res) => {
       
        req.session.destroy();
        return res.redirect('/');
    }

    exports.profilePage = (req, res) => {
        if(!req.session.login) return res.redirect('/');
        res.render('profile');
    }

