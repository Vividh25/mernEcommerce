const express = require("express");
const {
    signup,
    signin,
    requireSignin,
} = require("../../controllers/adminController/adminController/adminAuth");
const {
    validateSignInRequest,
    isSignInRequestValidated,
} = require("../../validators/signinValidators/validateAdmin");
const {
    validateRequest,
    isRequestValidated,
} = require("../../validators/signupValidators/validateAdmin");
const router = express.Router();

router.post(
    "/admin/signin",
    validateSignInRequest,
    isSignInRequestValidated,
    signin
);

router.post("/admin/signup", validateRequest, isRequestValidated, signup);

// router.post("/profile", requireSignin, (req, res) => {
//     res.status(200).json({ user: "profile" });
// });

module.exports = router;
