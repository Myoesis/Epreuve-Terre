// change l'heure du format 12 to 24


const time=process.argv[2]
let [hour , min] = time.split(":")
let minute
let enTime
if(min != undefined ){
    let minute = min.slice(0,2)
    const enTime = min.slice(2,4)
}
    hour = parseInt(hour)

const to24 = (time) => {
    
    if (hour <=11 && enTime ==="PM") {
        hour = hour+12
        return `${hour} : ${minute}`
    } else if (hour <= 11 && enTime=== "AM") {
        return `${hour} : ${minute}`
    } else if (hour===12 && enTime ==="AM") {
        hour -=12
        return `${hour} : ${minute}`
    } else if (hour === 12 && enTime==="PM"){
        return `${hour} : ${minute}`
    }
}

if(enTime === "AM" || enTime==="PM"){
    if(time.slice(2,3) === ":" && !isNaN(hour) && !isNaN(minute) && hour > 0 && hour < 12 && minute>0 && minute<60 && process.argv[3]!= undefined) {
        console.log(to24(time))
    } else {
        console.log("veuillez entrer une heure au format 03:30PM")
    }
 } else (console.log("veuillez entrer une heure au format 03:30PM"))

