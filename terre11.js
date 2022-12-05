// creer un programme qui transforme une heure en format 24h vers 12h (pm toussa toussa)


function changeTime() {
    let time=process.argv[2]
if(parseInt(time.slice(0,2))>=13){
    time = (parseInt(time.slice(0,2))-12) + time.slice(2,7) + " PM"
} else if (parseInt(time.slice(0,2))===12){
    time = time + " PM"
} else if (parseInt(time.slice(0,2))===24 || parseInt(time.slice(0,2)) === 00){
    time = "12" + time.slice(2,7) + " AM"
} else {
    time = time + " AM"
} return time
}



let time=process.argv[2]

if (time === undefined || isNaN(time.slice(0,2)) || time.slice(2,3) != ":" || isNaN(time.slice(3,5)) || time.slice(0,2) > 23 || time.slice(3,5) > 59) {
    console.log("tu dois écrire une heure valide au format 00:00")
} else {
    console.log(changeTime())
}

const changeHour = (timing) => {
    const [hour,minute] = timing.split(":")
    const enHour = hour % 12 || 12
    const enTime = hour >= 12 ? "PM" : "AM"
    return `${enHour}:${minute} ${enTime}`

} 
console.log(changeHour(process.argv[2]))