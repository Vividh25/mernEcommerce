const express = require("express");
const router = express.Router();

const {
    addCategory,
} = require("../controllers/adminController/adminController/category");

router.post("/category/create", addCategory);

module.exports = router;
