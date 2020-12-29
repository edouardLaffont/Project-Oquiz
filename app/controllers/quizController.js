const { Quiz } = require('../models');

exports.quizPage = async (req, res) => {
    try {
        const quiz = await Quiz.findByPk(Number(req.params.id), {include:['author', 'tags', {association: 'questions', include:['possible_answers', 'level']}]});
        res.render('quiz', {quiz});
    } catch(error) {
        console.log(error);
    }
   
}