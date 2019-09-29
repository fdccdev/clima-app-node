const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

const getInfo = async direccion => {
  let resp = await lugar.getLugar(direccion);
  let info = await clima.getClima(resp.lat, resp.lng);
  if (info.length === 0) {
    throw new Error(`no se pudo establecer la temperatura de ${direccion}`);
  } else {
    console.log(`la temperatura de ${direccion} es de ${info} grados`);
  }
};

getInfo(argv.direccion);
