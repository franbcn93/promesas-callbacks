// import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";
// import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo } from "./js/await";
// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida]).then((mensaje) =>
//   console.log(mensaje)
// );
// buscarHeroe("capi2").then(console.log).catch(console.warn);
// buscarHeroeAsync("spider2").then(console.log).catch(console.warn);
// console.time("Espera");

// obtenerHeroesArr().then((heroes) => {
//   console.table(heroes);
//   //   console.time("await");
// });

// obtenerHeroeAwait("capi2").then((heroe) => {
//   console.log(heroe);
//   console.timeEnd("Espera");
// });

heroesCiclo();
