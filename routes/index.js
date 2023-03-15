var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express.js',
    routing: 'Маршрутизация',
    description: 'Express - это минималистичный и гибкий веб-фреймворк для приложений Node.js, /n предоставляющий обширный набор функций для мобильных и веб-приложений.'
  });
});


// friends
router.get("/myFriends", function (req, res) {
  res.render("friends.hbs", {
    fr1: "Baatyr",
    fr2: "Disha",
    fr3: "Elzar",
    fr4: "Omush",
    fr5: "Sezim"
  });
});

// foods
router.get('/myFoods', function (req, res) {
  res.render("foods.hbs", {
    food1: 'Манты',
    food2: 'Плов',
    food3: 'Пицца',
    food4: 'Спагетти',
    food5: 'Лагман'
  });
});

// books
router.get('/myBooks', function (req, res) {
  res.render("books.hbs", {
    book1: "Зов предков",
    book2: "Корабль невест",
    book3: "Агата кристи",
    book4: "До встречи с тобой",
    book5: "Вилла аркадия"
  });
});

// hobbies
router.get('/myHobbies', function (req, res) {
  res.render('hobbies.hbs', {
    hobby1: 'Программирование',
    hobby2: 'Английский',
    hobby3: 'Баскетбол',
    hobby4: 'Настольный теннис',
    hobby5: 'Плавание'
  });
});

// films
router.get('/myFilms', function (req, res) {
  res.render('films.hbs', {
    film1: 'Социальная сеть',
    film2: 'С любовью в Америку',
    film3: 'Хакер',
    film4: 'Кто я ?',
    film5: 'Преследование'
  })
})

module.exports = router;
