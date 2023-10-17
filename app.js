// // TAB 1
// let tab1 = [];
// for (i = 0; tab1.length < 5; i++) {
//   let valeurTab1 = Number(prompt("Veuillez saisir les valeurs du tableau 1"));
//   tab1.push(valeurTab1);
// }
// console.log(tab1);
// TAB 2
let tab2 = [];
// for (i = 0; tab2.length < 5; i++) {
//   let valeurTab2 = Number(prompt("Veuillez saisir les valeurs du tableau 2"));
//   tab2.push(valeurTab2);
// }
// console.log(tab2);
// TAB 3 A PARTIR DES ELEMENTS DE TAB1 absents dans TAB2
let tab3 = [10, 20, 24, 78];
// console.log(tab3);
// TAB 4 A PARTIR DES ELEMENTS DU TAB1 presents dans TAB2
let tab4 = [];
// console.log(tab4);
// // Ecrire une fonction avec comme paramètre tab1 et qui le trie
let Tab1 = [5, 3, 87, 1, -4, -99, 0];
let tabTrie = Tab1.sort((a, b) => a - b);
console.log(tabTrie);

// Ecrire une fonction avec comme paramètre tab1 et qui retourne la valeur min max
// Valeur maximale
function findMax(tab) {
  return Math.max.apply(null, tab);
}
console.log(findMax(Tab1));
// Valeur minimale
function findMin(tab) {
  return Math.min.apply(null, tab);
}
console.log(findMin(Tab1));
