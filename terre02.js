// créer un fichier qui affiche les arguments qu'il recoit, ligne par ligne.
// étape 1 : passer l'argument dans un array process.argv
// étape 2 : boucle qui affiche index par index et si 'undefined', on break / ou avec .length pour plus de facilités. 
let iSaid=process.argv
for (let i = 2; i < iSaid.length; i++) {
    const element = iSaid[i];
    console.log(element)
} 