# Conception de la BDD

Méthode MERISE

=> une méthode qui va nous permettre de créer notre MCD (Modèle Conceptuel de Données)

- analyse des entités et de leurs attributs/propriétés
- analyser les associations (cardinalités)
- desssin du MCD (Mocodo)

## Analyse des entités

- Quizz
  - title
  - description

- Question
  - title/question
  - contexte/anecdote

- Answer
  - description

- User
  - firstname
  - lastname
  - identifiant/email
  - password

- Tag/Theme
  - name

- Level
  - name

## Analyse des associations entre entité

### User <-> Quizz
Un User _est l'auteur_ d'un Quizz

- verbe: **écrire**
- cardinalité `1:N`
  - User > Quiz: un User écrit 0 Quiz au min, et N Quiz au max
  - Quiz > User: un Quiz peut être écrit par 1 User (auteur) au min, et 1 User au max

### Question <-> Quizz
Un Quizz _contient_ des Question

- verbe: **contenir**
- cardinalité `1:N`
  - Question > Quiz: une Question est contenu dans 1 Quiz au min, et 1 Quiz au max 
  - Quiz > Question: un Quiz contient 0 Question au min et N au max

### Tag <-> Quizz
Un Tag _défini_ un Quizz

- verbe: **définir**
- cardinalité `N:N`
  - Tag > Quizz: un Tag définit 0 Quizz au min et N au max
  - Quizz > Tag: un Quizz est défini par 0 Tag au min et N au max


### Question <-> Level
Un Level _jauge_ une Question

- verbe: **jauger**
- cardinalité `1:N`
  - Level > Question: un Level jauge 0 Question au min et N au max
  - Question > Level: une Question est jaugé par 1 Level au min et 1 au max

### Question <-> Answer
/!\ il existe ici 2 associations entre ces entités

Une Question _détient_ une Answer possible

- verbe: **détenir**
- cardinalité `1:N`
  - Question > Answer: une Question détient 1 Answer possibles au min et N au max
  - Answer > Question: une Answer possible est détenue par 0 Question au min et 1 au max

pour la bonne réponse

Un Answer _valide_ une Question

- verbe: **valider**
- cardinalité `1:1`
  - Question > Answer: une Question est validée par 1 Answer au min et 1 au max
  - Answer > Question: une Answer valide 1 Question au min et 1 au max


## MCD (Mocodo)

[Schéma](./MCD.png)

```
Answer: description
Détenir, 01 Answer, 1N Question
User: firstname, lastname, email, password
Ecrire, 0N User, 11 Quiz

Valider, 11 Answer, 11 Question
Question: question, anecdote
Contenir, 11 Question, 0N Quiz
Quiz: title, description

Level: name
Jauger, 0N Level, 11 Question
Tag: name
Définir, 0N Tag, 0N Quiz
```

## MLD

Quizz(id, title, description, #user_id)
Question(id, question, anecdote, #quiz_id, #level_id, #answer_id)
Answer(id, description, #question_id)
User(id, firstname, lastname, email, password)
Tag(id, name)
Level(id, name)
Quiz_has_tag(#quiz_id, #tag_id)

En reprenant les cardinalités max de chaque relation, on determine où va la clé étrangère

1 User peut écrire N Quiz => Quiz prend la clé étrangère de l'id de User
1 Quiz peut contenir N Question => Question prend la clé étrangère de l'id de Quiz
1 Level peut jauger N Question => Question prend la clé étrangère de l'id de Level
1 Question peut détenir N Answer => Answer prend la clé étrangère de l'id de Question

Pour la relation 1:1 entre Question et Answer (le cas de la bonne réponse), on a le choix de placer la clé étrangère dans l'une ou l'autre des tables. Mais on a dèjà placé la clé étrangère de Question dans Answer, donc il faut la mettre dans Question.
