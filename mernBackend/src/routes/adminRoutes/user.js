const express = require("express");
const {
    signup,
    signin,
    requireSignin,
} = require("../../controllers/adminController/adminController/userAuth");
const {
    validateSignInRequest,
    isSignInRequestValidated,
} = require("../../validators/signinValidators/validateUser");
const {
    isRequestValidated,
    validateRequest,
} = require("../../validators/signupValidators/validateUser");
const router = express.Router();

router.post("/signin", validateSignInRequest, isSignInRequestValidated, signin);

router.post("/signup", validateRequest, isRequestValidated, signup);

// router.post("/profile", requireSignin, (req, res) => {
//     res.status(200).json({ user: "profile" });
// });

module.exports = router;
