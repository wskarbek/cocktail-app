const fs = require('fs');

var rawData = fs.readFileSync('./database/drinksComments.json');
var drinkComments = JSON.parse(rawData);

exports.getDrinkCommentsHandler = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(getDrinkComments());
}

exports.getDrinkCommentsByIdHandler = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(getDrinkCommentsById(req.params.id));
}

exports.addDrinkCommentHandler = function(req, res) {
    const result = addDrinkComment(
        req.body.comment.id,
        req.body.comment.author,
        req.body.comment.message
    );
    updateJSON();
    res.send(result);
}

exports.deleteDrinkCommentHandler = function(req, res) {
    const id = req.params.id;
    const message = req.params.message;
    const result = deleteDrinkComment(id, message);
    updateJSON();
    res.send({deleted: result})
}

function updateJSON() {
    fs.writeFile('./database/drinksComments.json', JSON.stringify(drinkComments),(err) => {
        if (err) {
            console.log(err);
        }
    });
}

function getDrinkComments() {
    return drinkComments;
}

function getDrinkCommentsById(id) {
    if(drinkComments.hasOwnProperty(id)) {
        return drinkComments[id];
    } else {
        return null;
    }
}

function addDrinkComment(id, author, message) {
    if(drinkComments.hasOwnProperty(id)) {
        drinkComments[id].push({
            "author": author,
            "message": message
        });
    } else {
        drinkComments[id] = [{
            "author": author,
            "message": message
        }];
    }
}

function deleteDrinkComment(id, message) {
    let index = drinkComments[id].findIndex(x => x.message === message);
    if (index !== undefined) drinkComments[id].splice(index, 1);
    return index;
}