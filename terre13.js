// créer un programme qui prend 3 entiers en arguments et renvois celui du milieux
const findSuisse = (x,y,z) => {
    if ((x > y && x < z) || (x<y && x>z)) {
        return x
    } else if ((z<x && z>y)||(z>x && z<y)) {
        return z
    } else if ((y<x && y>z) || (y>x && y<z)) {
        return y
    } else {
        return "error"
    }
}

const x = process.argv[2]
const y = process.argv[3]
const z = process.argv[4]

//les erreurs

if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
    console.log(findSuisse(parseInt(x), parseInt(y), parseInt(z)))
} else {
    console.log("tu dois rentrer 3 nombres entiers !")
}
