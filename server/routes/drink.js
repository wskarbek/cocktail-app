const express = require('express');
const router = express.Router();

const {
    getDrinksHandler, getDrinkByIdHandler, addDrinkHandler, addDrinksHandler,
    deleteDrinkHandler, rateDrinkHandler
} = require("../controllers/drink");

/* Handles getDrinks request and returns them */
router.get('/', getDrinksHandler);

/* Handles getDrinkById request and returns it */
router.get('/:id', getDrinkByIdHandler)

router.post('/', addDrinkHandler);

router.post('/file', addDrinksHandler);

router.get('/:id/:stars', rateDrinkHandler);

router.delete('/:id', deleteDrinkHandler);

module.exports = router;