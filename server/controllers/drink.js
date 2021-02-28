const fs = require('fs');

var rawData = fs.readFileSync('./database/drinks.json');
var drinks = JSON.parse(rawData);

exports.getDrinksHandler = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(getDrinks());
}

exports.getDrinkByIdHandler = function(req, res) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    res.send(getDrinkById(id));
}

exports.addDrinkHandler = function(req, res) {
    const result = addDrink(
        req.body.drink.id,
        req.body.drink.name,
        req.body.drink.type,
        req.body.drink.photo,
        req.body.drink.glass,
        req.body.drink.ingredients,
        req.body.drink.recipe
    );
    updateJSON();
    res.send(result);
}

exports.addDrinksHandler = function(req, res) {
    const drinks = req.body;
    const result = addDrinks(drinks);
    //updateJSON();
    res.send(result);
}

exports.rateDrinkHandler = function(req, res) {
    const id = req.params.id;
    const stars = req.params.stars;
    var result = rateDrink(id, stars);
    updateJSON();
    res.send({stars: result});
}

exports.deleteDrinkHandler = function(req, res) {
    const id = req.params.id;
    deleteDrink(id);
    updateJSON();
    res.send(`${id} deleted.`);
}

function updateJSON() {
    fs.writeFile('./database/drinks.json', JSON.stringify(drinks),(err) => {
        if (err) {
            console.log(err);
        }
    });
}

function getDrinks() {
    return drinks;
}

function getDrinkById(id) {
    if(drinks.hasOwnProperty(id)) {
        return drinks[id];
    } else {
        return null;
    }
}

function addDrink(id, name, type, photo, glass, ingredients, recipe) {
    let newDrink = {
        "name": name,
        "type": type,
        "photo": photo,
        "glass": glass,
        "ingredients": ingredients,
        "recipe": recipe
    };
    drinks[id] = newDrink;
    return newDrink;
}

function addDrinks(drinkList) {
    Object.keys(drinkList).map((id) => {
       drinks[id] = drinkList[id];
    });
    return drinkList;
}

function rateDrink(id, stars) {
    let s;
    if(drinks[id].hasOwnProperty("rating")) {
        let score = drinks[id].rating.score;
        let votes = drinks[id].rating.votes + 1;
        drinks[id].rating.votes = votes;
        s = parseFloat((parseInt(score * (votes-1)) + parseInt(stars)) / votes);
        drinks[id].rating.score = s;
    } else {
        s = stars;
        drinks[id].rating = {
            votes: 1,
            score: s
        }
    }
    return s;
}

function deleteDrink(id) {
    delete drinks[id];
    updateJSON();
}