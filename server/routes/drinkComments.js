const express = require('express');
const router = express.Router();

const {
    getDrinkCommentsHandler, getDrinkCommentsByIdHandler, addDrinkCommentHandler,
    deleteDrinkCommentHandler
} = require("../controllers/drinkComments");

router.get('/', getDrinkCommentsHandler);

router.get('/:id', getDrinkCommentsByIdHandler);

router.post('/', addDrinkCommentHandler);

router.delete('/:id/:message', deleteDrinkCommentHandler);

module.exports = router;