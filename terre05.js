// creer un fichier qui rend le r"sultat d'une division et son reste :
// 1- créer une fonction avec 2 arguments 
// 2- afficher l'entier (resultat arrondis inférieur --> Math.floor ?)
// 3- afficher le rester (modulo)

// attention, les process.argv donnent par defaut des strings ! --> parseInt pour avoir une integer

function division(x,y) {
    let resultat=Math.floor(x/y)
    return resultat
}
function reste(x,y) {
    let reste=x%y
    return reste
}

if(parseInt(process.argv[2]) < parseInt(process.argv[3]) || parseInt(process.argv[3]) === 0) {
    console.log('undefined')
} else {
console.log("resultat : " + division(process.argv[2],process.argv[3]))
console.log("reste : " + reste(process.argv[2],process.argv[3]))
}
