/**
 * Created by braddavis on 3/11/18.
 */
var express = require('express');
var router = express.Router();
var civicModel = require( 'root-require' )( 'lib/models/civic' );


router.post('/login', login);
module.exports = router;


/**
 * Decrypts civic JWT if provided in HTTP Body
 *
 * @param req
 * @param res
 */
function login( req, res ) {

    if(!req.body.jwt){
        res.status(401).json({
            success: false,
            error: {
                "message": "Civic JWT must be included in HTTP Body Request"
            }
        });
    } else {
        civicModel.decryptChallengeJWT(req.body.jwt, function(response){
            res.json(response)
        })
    }
}
