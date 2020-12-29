exports.adminPage = (req, res) => {
    
    if(!req.session.login || req.session.login.role !== 'admin') return res.redirect('/');
    res.render('admin');


}