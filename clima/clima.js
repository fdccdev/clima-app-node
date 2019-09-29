const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9ef25376e7b796907c4565a0700b5825`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
