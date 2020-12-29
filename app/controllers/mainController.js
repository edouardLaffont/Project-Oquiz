const { Quiz, User } = require('../models');

exports.homePage = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll({include:'author'});
        res.render('home', {quizzes});
    } catch(error) {
        console.log(error);
    }
    
}

