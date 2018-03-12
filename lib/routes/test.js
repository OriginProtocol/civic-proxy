/**
 * Created by braddavis on 3/11/18.
 */
var express = require('express');
var router = express.Router();


router.get('/', confirmAlive);

module.exports = router;


/**
 * Returns 200 response + server date/time
 *
 * @param req
 * @param res
 */
function confirmAlive( req, res ) {
    console.log( 'route:test' );
    var d = new Date();
    res.send('Server is alive: ' + d);
}