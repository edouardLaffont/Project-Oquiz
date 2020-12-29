/**
 * TEST DU MODEL ANSWER
 */
// const Answer = require('./app/models/answer');
// requete a une base puis on stocke les données
// const data = { id: 2, description: 'lorem ipsum' };
// const answer = new Answer(data);

// à ce stade je passe par le setter de  Answer
// javascript comprend qu'il faut passer par le setter
// quand on fait une assignation
// answer.description = '234234';

// console.log('answer', answer.description, answer.id);


/**
 * TEST CONNEXION ET REQUETE BDD VIA DATAMAPPER
 */

// const dataMapper = require('./app/dataMapper');

// dataMapper.getAllQuizzes((err, quizzes) => {
//   console.log('err', err);
//   // jusqu'ici on récupère les données brutes depuis la BDD
//   // et on les passe à la vue
//   // maintenant ce qu'on va vouloir recupérer c'est des instances de Quiz
//   // ce qu'on va vouloir faire, c'est passer ces données à nos modèles
//   // les modèles sont en charge de la gestion des data dans notre application
//   console.log('quizzes', quizzes);

//   // je récupère le premier élément du tableau d'instances de Quiz
//   const firstQuiz = quizzes[1];

//   console.log(firstQuiz.getTitleAndDescription());
// });

/**
 * TEST CONNEXION ET REQUETE BDD VIA ACTIVE RECORDS
 */

// const Quiz = require('./app/models/quiz');

// avant de passer la méthode en static, on doit passer par une instance de la classe
// pour pouvoir l'utilser
// const quiz = new Quiz({id: 1, description: 'lorem', title: 'ispum'});

// quiz.findAll((err, quizzes) => {
//     console.log('quizzes', quizzes);
//   });
  
  // en passant la méthode findAll en static, on a rattaché cette méthode à la classe (idem Math.round())
  // Quiz.findAll((err, quizzes) => {
  //   console.log('quizzes', quizzes);
  // });

// Quiz.findById(1, (err, quiz) => {
//   console.log('quiz', quiz);
// });

// const quiz = new Quiz({title: 'lorem', description: 'ipsum', user_id: 1});
// console.log('quiz', quiz);

// quiz.insert((err, response) => {
//   console.log('response', response);
// });

/**
 * CORRECTION DU CHALLENGE
 */

const Answer = require('./app/models/answer');
const Level = require('./app/models/level');
const Question = require('./app/models/question');
const Quiz = require('./app/models/quiz');
const User = require('./app/models/user');
const Tag = require('./app/models/tag');


// Level.findAll((err, result) => {
//   console.log('err', err);
//   // avec instanceof on peut demander à JS si notre objet est une instanceof
//   // d'un certain type de classe
//   // console.log(result[0] instanceof User);

//   console.log('result', result);
// });

// User.findById(1, (err, result) => {
//   console.log('err', err);
//   console.log('result', result);
//   // result.delete(console.log);
// });

// const question = new Question({
//   question: 'Quel est la différence ?',
//   anecdote: 'Mmmh presque',
//   wiki: '',
//   level_id: 2,
//   answer_id: 1,
//   quiz_id: 1,
// });

// // console.log('user', user);

// question.insert((err, result) => {
//   console.log('err', err);
//   console.log('result', result);
// });

// get de la valeur de email
// ici on est pas obligé de mettre les parenthèses pour exécuter le getter
// JS sait que s'en est un, et au niveau de l'écriture ça ressemble à une propriété
// const email = user.email;
// console.log(email);

// set de la propriété email
// user.email = 'vince@oclock.io';
// console.log(user.email);

// va trouver le user avec l'id 7 dans la bdd
// User.findById(1, (err, user) => {
//   console.log('user trouvé dans la base de donnée', user);
// user.lastname = 'Candillas';
// user.update((err, result) => {
//   console.log('err', err);
//   console.log('result', result);
// });


  // on change la valeur de la propriété _firstname avec le setter firstname
  // user.firstname = 'Eric';
  // user.lastname = 'Bidal';

  // // l'instance de User se charge d'exécuter la fonction qui va modifier la ligne dans la bdd
  // user.update((err, result) => {
  //   console.log('result', result);
  // });

  // user.delete((err, success) => {
  //   console.log('err', err);
  //   console.log('success', success);
  // });
// });

// const Quiz = require('./app/models/quiz');

// Quiz.findById(1, (err, quiz) => {
//   console.log('quiz', quiz);

//   quiz.description = 'Tantôt effrayants, tantôt drôles.';

//   quiz.update((err, result) => {
//     console.log('err', err);
//     console.log('result', result);
//   })
// })

/**
 * CORRECTION CHALLENGE REFACTO
 */

// User.findAll((error, result) => {
//   console.log('result', result);
// });

// Question.findById(3, (error, question) => {
//   console.log("error : ", error);
//   console.log("question trouvée dans la BDD : ", question);
// });

// fonction qui nous permet de ne pas nous répéter pour le callback 
// qu'on fournit à chaque fois
const logger = (err, result) => {
  console.log('err', err);
  console.log('result', result);
};

// const hardLevel = new Level({ name: 'très très difficile'});
// console.log('hardLevel', hardLevel)
// hardLevel.save(logger);

// vérification que la ligne a bien été insérée en base
Level.findById(7, (err, level) => {
  level.name = 'très très très difficile';
  level.save(logger);
});

// User.findBy({id: 1, firstname: 'Loris'}, logger);