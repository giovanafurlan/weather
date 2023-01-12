var axios = require("axios");

export default function handler(req, res) {
  const { user } = req.body;

  var config = {
    method: "get",
    url: `http://api.weatherapi.com/v1/current.json?key=d8ca81675a554623a65131212231101&q=${user.place}&aqi=no`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
