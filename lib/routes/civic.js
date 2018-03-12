/**
 * Created by braddavis on 3/11/18.
 */
var express = require('express');
var router = express.Router();
var civicModel = require( 'root-require' )( 'lib/models/civic' );


router.post('/login', login);
module.exports = router;


/**
 * Returns existing Listing by ID
 *
 * @param req
 * @param res
 * @param next
 */
function login( req, res ) {
    if(!req.jwt){
        res.status(401).json({
            success: false,
            error: {
                "message": "Civic JWT must be included in HTTP Body Request"
            }
        });
    } else {
        civicModel.get(req.jwt, function(response){
            res.json(response)
        })
    }
}