// créer un programme qui me dit si une suite d'entier est triée dans l'ordre croissant ou non 
// utiliser une boucle pour comparer chaque entier au précédent : si un entier n'est pas trié => return "pas trié"
// créer une condition dans la boucle si un argument n'est pas un nombre 





const trié = (info) => {
    if(!info.length) {
        return "erreur"
    }
    for (let i=0 ; i<info.length  ; i++) {
        if (isNaN(info[i]) ) {
            return "error"
        } else if (parseInt(info[i])>parseInt(info[i+1])) {
            return "pas trié !"
        } 
    } return "trié"
}

console.log(trié(process.argv.slice(2)))

