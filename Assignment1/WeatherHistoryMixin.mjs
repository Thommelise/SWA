import { weatherData } from "./WeatherDataMixin.mjs";

function weatherHistory(value, time, place, type, unit) {

    const weather = weatherData(value,time,place,type,unit)


    return {...weatherData}
}



let temp = weatherHistory(25.4,2000,"via","test","mm")


console.log()