const request = require('request');

var geoCodeAddress = (address,callback) => {
    var encodedAddress = encodeURI(address);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to the google server');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('invalid address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    })
}

module.exports = {
    geoCodeAddress
}