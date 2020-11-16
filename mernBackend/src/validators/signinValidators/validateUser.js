const { check, validationResult } = require("express-validator");

exports.validateSignInRequest = [
    check("email").isEmail().withMessage("email is required"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("password must be atleast 6 characters long"),
];

exports.isSignInRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
};
