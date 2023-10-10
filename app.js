// // TAB 1
let tab1 = [];
for (i = 0; tab1.length < 5; i++) {
  let valeurTab1 = Number(prompt("Veuillez saisir les valeurs du tableau 1"));
  tab1.push(valeurTab1);
}
console.log(tab1);
// TAB 2
let tab2 = [];
for (i = 0; tab2.length < 5; i++) {
  let valeurTab2 = Number(prompt("Veuillez saisir les valeurs du tableau 2"));
  tab2.push(valeurTab2);
}
console.log(tab2);
// TAB 3 A PARTIR DES ELEMENTS DE TAB1 absents dans TAB2
let tab3 = [10, 20, 24, 78];
console.log(tab3);
// TAB 4 A PARTIR DES ELEMENTS DU TAB1 presents dans TAB2
let tab4 = [];
console.log(tab4);
// // Ecrire une fonction avec comme paramètre tab1 et qui le trie
function myFunction(tab1) {
  tab1 = [10, 20, 24, 78, 1];
  tab1.sort();
  return tab1;
}
let tabTrier = myFunction(10, 20, 24, 78, 1);
console.log(tabTrier);
// Ecrire une fonction avec comme paramètre tab1 et qui retourne la valeur min max
