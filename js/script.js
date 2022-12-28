// EXERCICE 1

console.log('------------------------------------------------------')
console.log('----------------- EXO 1 ------------------------------')

const fruits = ["Banana","Apples", ,"Oranges", "Blueberries"];
console.log('------------- TABLEAU DE DEPART ----------------------')
console.log(fruits)
console.log('------------------------------------------------------')
// 1 . suppression de Banana  du tableau 
fruits.shift()
console.log('----- PREMIER ELEMENT DU TABLEAU SUPPRIME ------------')
console.log(fruits)
console.log('------------------------------------------------------')
// 2 . Trie du tableau par ordre alphabetique
fruits.sort()
console.log('----------- TRI PAR ORDRE ALPHABETIQUE ---------------')
console.log(fruits)
console.log('------------------------------------------------------')
// 3 . Ajoutons Kiwi à la fin du tableau 
fruits.push('Kiwi')
console.log('--------- AJOUT DE KIWI A LA FIN DU TABLEAU ----------')
console.log(fruits)
console.log('------------------------------------------------------')
// 4. Suppression de Apples de la matrice 
fruits.shift()
console.log('----------- SUPPRESSION DE APPLE DE LA MATRICE -------')
console.log(fruits)
console.log('------------------------------------------------------')
// 5 . Trie dans l'ordre inverse
fruits.reverse()
console.log('---------- TRIE INVERSE DU TABLEAU -------------------')
console.log(fruits)
console.log('------------------------------------------------------')


console.log('------------------------------------------------------')
console.log('----------------- EXO 2 ------------------------------')

// EXERCICE 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log('------------- TABLEAU DE DEPART ----------------------')
console.log(moreFruits)
console.log('------------------------------------------------------')
console.log('')
// 1 .Accedons à Orange
console.log('---------- AFFICHAGE DU MOT ORANGE -------------------')
console.log(moreFruits[1][1][0])
console.log('------------------------------------------------------')