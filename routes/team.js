var express = require('express'),
    router  = express.Router();


router.route('')
    
  .get(function (req, res) {
    res.render('team', {teamActive: true});
  });

module.exports = router;
