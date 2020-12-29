const { Tag } = require('../models');

exports.tagsPage = async (req, res) => {
    try {
        const tags = await Tag.findAll();
        res.render('tags', {tags});
    } catch (error) {
        console.log(error);
    }
}

exports.tagPage = async (req, res) => {
    try {
        const tag = await Tag.findByPk(Number(req.params.id), {include:{association:'quizzes', include:'author'}});
        res.render('tag', {tag});
    } catch (error) {
        console.log(error);
    }
}