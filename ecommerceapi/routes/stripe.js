const router = require("express").Router();
//const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("sk_test_51LJU5rDsVP8T3E0eTWOsfZw72KbUJhCI1I5ftndsGLNlFq9jYgb3pr055qPbZpb7t3Yp4fF6KP59DPlzbP6zOPGm00h3G3LSHf")

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;