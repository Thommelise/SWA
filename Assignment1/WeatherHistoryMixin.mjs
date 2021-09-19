import { weatherData } from "./WeatherDataMixin.mjs";

function weatherHistory(value, time, place, type, unit) {

    const weather = weatherData(value,time,place,type,unit)


    return {...weatherData}
}



let temp = weatherHistory(22,3000,"test","snow", "mm")


console.log(temp.place)