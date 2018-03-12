/**
 * Created by braddavis on 3/11/18.
 */

Object.defineProperties( module.exports, {

    get: {
        value: function get(jwt, callback){
            civicClient.exchangeCode(jwt)
                .then((userData) => {
                    // store user data and userId as appropriate
                    console.log('userData = ', JSON.stringify(userData, null, 4));
                    callback(userData);
                }).catch((error) => {
                    console.log(error);
                });
        }
    },

    version: {
        value: 1.0,
        writable: false
    }
});


const civicSip = require('civic-sip-api');

const civicClient = civicSip.newClient({
    appId: process.env.CIVIC_APP_ID,
    appSecret: process.env.CIVIC_SECRET,
    prvKey: process.env.CIVIC_PRIVATE_KEY,
});