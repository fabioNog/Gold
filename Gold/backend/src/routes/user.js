const express = require('express');
const validateInput = require('../shared/validations/signup')

const router = express.Router();



router.post('/', (req, res) => {
    setTimeout(() => {
        const { errors, isValid } = validateInput(req.body);


        console.log(isValid)
        console.log(errors)

        if (isValid) {
            res.json({ sucess: true });
            

        }
        else {
            res.status(400).json();
        }
    }, 1000);

})

module.exports = router;