//afficher l'inverse de la chaine de caractère donné en argument
const str = process.argv[2]
let out = ('')
if (process.argv[2] === undefined) {
    console.log("tu as oublié d'écrire quelquechose andouille !")
} else {
    for ( let i=1 ; str.length >= i ; i ++){
        out=out + str[str.length-i] ;
    }
}

console.log(out)

