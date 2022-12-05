//créer la fonction .length

let str=process.argv[2]
let length = 0

 if (!str) {
    console.log("tu as oublié d'écrire qqch")
} else if (!isNaN(str) ) {
    console.log("this is a number dumbass")
} else if (process.argv[3] != null) {
    console.log("tu as un argument de trop babane !")
} else  {
    for ( let i=0 ; str[i] != undefined ; i++) {
            length++ 
        } 
        console.log(length)
}
