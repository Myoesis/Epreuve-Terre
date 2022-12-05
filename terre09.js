// créer une fonction qui donne la racine carrée d'un nombre ENTIER POSITIF

function racine(num) {
    let rac = num**0.5
    return rac
}

if (isNaN(process.argv[2])) { 
    console.log("ça n'est pas un nombre banane")
} else if (process.argv[2] <=0) {
    console.log("un nombre positif s'il te plait !")
} else if(Math.floor(process.argv[2])*10 != process.argv[2]*10) {
    console.log("on a dit un entier !!!")
} else {
    console.log(racine(process.argv[2]))
}
