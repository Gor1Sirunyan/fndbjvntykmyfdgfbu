var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/logout',(req,res) => {
   req.session.destroy();
   res.redirect('/auth/login');
});



module.exports = router;
