// créer un programme qui affiche la puissance d'un nombre (+message d'erreur)

function puissance(base, expo) {
    let resultat=1 ;
    for (let i=0 ; i < expo ; i++) {
        resultat=base*resultat
    } return resultat ;
}

if (isNaN(process.argv[2])  || isNaN(process.argv[3]) ){
    console.log("error")
} else if (parseInt(process.argv[2]) === 0 || parseInt(process.argv[3]) <= 0) {
    console.log("error")
} else if (!isNaN(process.argv[2])  && !isNaN(process.argv[3] )) {
    console.log(puissance(process.argv[2], process.argv[3]))
}
