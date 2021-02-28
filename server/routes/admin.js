const express = require('express');
const router = express.Router();

const {
    verifyAdminHandler
} = require("../controllers/admin");

/* Handles getDrinks request and returns them */
router.get('/:key', verifyAdminHandler);

module.exports = router;