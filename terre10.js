//crée un programme qui indique si un nombre est un nombre premier ou non (+gérer les erreurs blablabla)
// si un nombre est divisible par 2,3,5,7 -> pas un nombre premier

function premier(num) {
    for ( let i=2 ; i<=num**0.5 ; i++) {
            if ( num%i === 0) { //tout nombre non premier est divisible soit par 2,3,5 ou 7)
               return `${num} n'est pas un nombre premier`            } 
        }
        return `${num} est un nombre premier`
    }




if (isNaN(process.argv[2])) { 
console.log("ça n'est pas un nombre banane")
} else if (process.argv[2] <0) {
    console.log("un nombre positif s'il te plait !")
} else if (Math.floor(process.argv[2])*1000 != process.argv[2]*1000) {
    console.log("on cherche un entier !!!")
} else if (parseInt(process.argv[2]) === 0 || parseInt(process.argv[2]) === 1) {
    console.log(process.argv[2] + " n'est pas un nombre premier")
} else (console.log(premier(process.argv[2])))

