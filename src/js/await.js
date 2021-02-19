import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ["capi", "iron", "spider"];
// Esta constante es igual a la siguiente
// const heroesPromesas = heroesIds.map((id) => buscarHeroe(id));
const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArr = async () => {
  return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroeAsync(id);
    return heroe;
  } catch (error) {
    console.log("Error!!");
    return {
      nombre: "No hay nombre",
      poder: "Tampoco tiene poder",
    };
  }
};

export const heroesCiclo = async () => {
  console.time("HeroesCiclo");

  for await (const heroe of heroesPromesas) {
    console.log(heroe);
  }

  console.timeEnd("HeroesCiclo");
};
