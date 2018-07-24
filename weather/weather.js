const request = require('request');

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/9f91ac663558a1a2ec367426a8a5832e/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (error)
            callback("Unable to connect to the server");
        else if (response.statusCode === 400)
            callback("Unable to fetch weather")
        else if (response.statusCode === 200)
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
    })
}

module.exports = {
    getWeather
}