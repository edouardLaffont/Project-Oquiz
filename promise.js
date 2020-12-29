const { User } = require('./app/models');

// code synchronne
/*
console.log('salut !');
const prenom = "Jimmy";
console.log(prenom);*/

// code asynchronne
/*
console.log('salut !');
setTimeout(() => {
    console.log('fin du setTimeout');
}, 3000);
console.log("c'est plutot cool l'asynchronne !");*/

// 1. callbacks : fonction en paramÈtre d'une fonction

// 2. Promesses : (depuis ES6)

// on cree une nouvelle instance de Promise pour creer une promesse et on lui passe en argument une fonction avec deux parametres qui seront toujours les memes : resolve et reject
/*const maSuperPromesse = new Promise((resolve, reject) => {
    const toutCbienPasse = true;
    // resolve est execute en cas de reussite
    // attention vous ne pouvez envoyer qu'un seul paramÈtre dans la fonction resolve (passez un objet si vous voulez renvoyer plusieurs elements)
    if(toutCbienPasse) resolve({msg:'Reussite', numb:20});
    // reject est execute en cas d'echec
    // attention vous ne pouvez envoyer qu'un seul paramÈtre dans la fonction reject (passez un objet si vous voulez renvoyer plusieurs elements)
    else reject(`Oups ! Il y a eu une erreur !`);
});*/

// .then est une mÉthode d'instance de la classe Promise, elle est implementÉe automatiquement et on peut donc l'utiliser sur toutes nos promesses (instances de la classe Promise)
/*maSuperPromesse.then(obj=> {
    console.log(obj.msg, obj.numb);
})
.catch(error => {
    console.log(error);
});*/
/*
const autrePromesse = new Promise((resolve, reject) => {
    traitementOK = false;
    if(traitementOK) resolve('Succes !');
    else reject('Echec !');
});*/
/*
const addition = (num1, num2) => {
    return new Promise((resolve, reject) => {
        const somme = num1 + num2;
        if(somme) resolve(somme);
        else reject('Erreur !');
    });
}

const soustraction = (num1, num2) => {
    return new Promise((resolve, reject) => {
        const somme = num1 - num2;
        if(somme) resolve(somme);
        else reject('Erreur !');
    });
}*/

/*
autrePromesse(5,5).then(somme => {
    // affiche le resultat
    console.log(somme)
    // puis ca affiche salut
    console.log('salut') 
 })
.catch(error => console.log(error));
console.log('test');*/

// 3. Async & Await (ES6+)
/*
const maSuperFonction = async () => {
    const users = await User.findAll();
    console.log(users);
}

console.log("On se connecte À la BDD");
maSuperFonction();
console.log('je fais un petit test pour voir l\'asynchrone');*/


