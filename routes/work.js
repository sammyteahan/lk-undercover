var express = require('express'),
    router  = express.Router();


router.route('')
    
    .get(function (req, res) {
        res.render('work', {workActive: true});
    });

module.exports = router;