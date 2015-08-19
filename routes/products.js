var express = require('express'),
    router  = express.Router();


router.route('')
    
    .get(function (req, res) {
        res.render('products', {productsActive: true});
    });

module.exports = router;