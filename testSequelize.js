// const Level = require('./app/models/level');

// Level.findAll().then(levels => console.log('levels', levels));

// Level.findByPk(1).then(level => console.log('level.name', level.name));

// j'importe mes modèles associés
const { Quiz, Question, Tag, User } = require('./app/models/index');

// trouve-moi le quiz qui a la clé primaire (primary key) 1
// dans l'objet en 2e argument je précise que je veux aussi toutes les questions
// qui sont associées à ce quiz avec la propriété include
// on donne à include l'alias qu'on a défini lors de l'association
// Quiz.findByPk(1, {
//   include: 'questions'
// }).then((quiz) => {
//   console.log('quiz', quiz)
// });
// en JS avec une big arrow function, quand on a un seul paramètre on peut 
// omettre les parenthèse
// quand on a une seule instruction on peut retirer les accolades
// Quiz.findByPk(1, {
//   include: 'questions'
// }).then(quiz => console.log('quiz', quiz));

// https://sequelize.org/master/manual/eager-loading.html
// on voudrait le quiz avec l'id 1, son auteur, ses tags, les questions associées,
// le level de chaque question et la bonne réponse
Quiz.findByPk(1, {
  // quand on veut récupérer plusieurs modèles associés, il faut passer un tableau d'alias
  include: [
    'tags',
    'author',
    // 'questions'
    {
      // dans notre cas on récupère des modèles associés aux questions
      // il faut donc passer par un objet avec la propriété 'association'
      // on précise ensuite dans un include ce qu'on veut récupérer d'une question
      association: 'questions',
      include: [
        'level',
        'right_answer'
      ]
    }
  ]
}).then((quiz) => {
  console.log('quiz', quiz)

});
