//fichier qui permet de dire si un nombre est paire ou impaire, et de dire si ce n'est pas un nombre. 
//si un argument n'est pas un nombre (Number.isNaN(argument)=== true) : mesage d'erreur
// si argument%2 === 0 : paire
// si argument%2 != 0 : impaire


if (isNaN(process.argv[2]%2)){
    console.log("tu ne me la fera pas a l'envers (même si j'en ai chié)")
} else if (process.argv[2]%2===0) {
    console.log("paire")
} else if (process.argv[2]%2!=0) {
    console.log("Impaire")
} ; 



