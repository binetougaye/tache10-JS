// Demander à l'utilisateur de remplir deux tableaux de longueur 5
// TAB 1
let tab1 = [];
tab1.length = 5;
console.log(tab1);
for (i = 0; i < tab1.length; i++) {
  let valeur = Number(prompt("saisir une valeur"));
  console.log(valeur);
}
// // TAB 2
let tab2 = [];
tab2.length = 5;
console.log(tab2);
for (i = 0; i < tab2.length; i++) {
  let valeur2 = Number(prompt("saisir une valeur"));
  console.log(valeur2);
}
// Creer tab3 à partir des éléments du tab1 qui ne se trouvent pas dans tab2
let tab3 = tab1.concat(tab2);
console.log(tab3);
