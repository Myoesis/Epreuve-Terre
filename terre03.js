// afficher l'alphabet à partir d'une lettre, avec une boucle
// boucle si alphabet[i]!= process.argv --> [i] suivant
//        si alphabet[i] = process.argv --> nouvelle boucle qui fait rentrer les alphabets[i] dans une variable (voir terre0.js) puis exprimer la variable

const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] ;
let sayAlphabet=('')
let indexLettre=('')

for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i]===process.argv[2]) {
         indexLettre = `${i}`
    } 

}
for (let i = `${indexLettre}`; i < alphabet.length; i++) {
    sayAlphabet = sayAlphabet + alphabet[i]
    
}

console.log(sayAlphabet)
