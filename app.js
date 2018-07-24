const yargs = require('yargs');
const request = require('request')
const geocode = require('./geocode/geocode');
var weather = require('./weather/weather');
const argv = yargs.options({
    a: {
        demand: true,
        string: true,
        alias: 'address',
        describe: 'Address to fetch weather for'
    }
}).help().alias('help', 'h').argv;

var result = {};
geocode.geoCodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage)
        console.log(errorMessage);
    else {
        console.log(JSON.stringify(result, undefined, 4));
        weather.getWeather(result.lat, result.lng, (errorMessage, result) => {
            if (errorMessage)
                console.log(errorMessage);
            else {
                console.log(JSON.stringify(result, undefined, 4));
                result = result;
            }
        });
    }
});

