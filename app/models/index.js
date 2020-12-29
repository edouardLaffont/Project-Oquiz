const Answer = require('./answer');
const Level = require('./level');
const Quiz = require('./quiz');
const Question = require('./question');
const Tag = require('./tag');
const User = require('./user');


Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  as: 'questions'
});

Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  as: 'quiz'
});

Answer.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question'
});

Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'possible_answers'
});

Question.belongsTo(Answer, {
  foreignKey: 'answer_id',
  as: 'right_answer'
});

Level.hasMany(Question, {
  foreignKey: 'level_id',
  as: 'questions'
});

Question.belongsTo(Level, {
  foreignKey: 'level_id',
  as: 'level'
});

Quiz.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'author'
});

User.hasMany(Quiz, {
  foreignKey: 'user_id',
  as: 'quizzes'
});

Quiz.belongsToMany(Tag, {
  foreignKey: 'quiz_id',
  otherKey: 'tag_id',
  through: 'quiz_has_tag',
  as: 'tags'
});

Tag.belongsToMany(Quiz, {
  foreignKey: 'tag_id',
  otherKey: 'quiz_id',
  through: 'quiz_has_tag',
  as: 'quizzes'
});

module.exports = {
  Answer,
  Level,
  User,
  Tag,
  Quiz,
  Question,
};
