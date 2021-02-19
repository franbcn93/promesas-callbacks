const heroes = {
  capi: {
    nombre: "Paco París",
    poder: "Estudiar sin parar",
  },
  iron: {
    nombre: "Ironman",
    poder: "Poderes del hierro",
  },
  spider: {
    nombre: "Spiderman",
    poder: "Trepar por las paredes",
  },
};

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];
  callback(heroe);
};
