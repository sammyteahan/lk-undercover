var express = require('express'),
    router  = express.Router();


router.route('')
    
    .get(function (req, res) {
        res.render('github', {githubActive: true});
    });

module.exports = router;