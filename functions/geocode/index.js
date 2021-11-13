const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (req, res, client) => {
  const { city, mock } = url.parse(req.url, true).query;

  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    return res.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((response) => {
      return res.json(response.data);
    })
    .catch((e) => {
      res.status(400);
      return console.send(e.res.data.error_message);
    });
};
