import "./styles.css";
import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks.js";
import { buscarHeroe } from "./js/promesas";

const heroeId1 = "capi";
const heroeId2 = "spider";

// buscarHeroe(heroeId, (heroe) => {
//   console.log(heroe);
//   console.log(heroe.nombre);
// });

// buscarHeroe(heroeId1).then((heroe1) => {
//   // console.log(`Enviando a ${heroe.nombre} a la misión`);
//   buscarHeroe(heroeId2).then((heroe2) => {
//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//   });
// });

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    console.log("Se terminó el programa");
  });

console.log("Fin de la missión");
