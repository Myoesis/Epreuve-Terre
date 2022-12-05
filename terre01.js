// Objectif : un programme qui donne son propre nom
// step 1 : trouver un moyen de récupérer son nom --> chemin du fichier : console.log(process.argv[1])  (mais fonction de JS (node plus exactement))
// step 2 : garder seulement le dernier élément du chemin de fichier --> séparer le chemin dans un array, afficher le dernier element. 
const path = process.argv[1]
let pathSplitted = path.split('/')
const nbElements= pathSplitted.length
let indexNom=nbElements-1

let name = pathSplitted[indexNom]

console.log(name)

// hypothèse : récuperer le path. Creer une boucle qui ajoute lettre par lettre dans une variable et qui stop quand on rencontre /. puis nouvelle variable etc... puis ajouter ces variables dans une array. et selectionner le dernier element
