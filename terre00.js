// Afficher l'alphabet sur une seule ligne, le tout avec une loop
const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] ;
let sayAlphabet=('')

for (let i=0 ; i<26 ; i++) {
    sayAlphabet = sayAlphabet + alphabet[i]
}
console.log(sayAlphabet) ;
