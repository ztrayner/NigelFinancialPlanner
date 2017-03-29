const express = require('express');
const router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET825x4D8',
  userProperty: 'payload'
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/protected', auth, ctrlProfile.profileRead);

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

module.exports = router;
