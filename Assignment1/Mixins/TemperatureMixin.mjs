import { weatherData } from "./WeatherDataMixin.mjs";

function temperature(value, time, place, type, unit) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function convertToF() {
        if(unit === "C") {
            value = value * 1.8 + 32
            unit = "F"
        }

        return {value, unit}
    }

    function convertToC() {
        if(unit === "F") {
            value = (value - 32) / 1.8
            unit = "C"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        convertToF,
        convertToC
    }
}

let temp1 = temperature(78, 2000, "Horsens", "Sunny", "F")
console.log(temp1.convertToC().value, temp1.convertToC().unit)



function precipitation(value, time, place, type, unit, precipitation) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getPrecipitationType() {
        return precipitation
    }

    function convertToInches() {
        if(unit === "MM") {
            value = value * 0.039370
            unit = "Inch"
        }

        return {value, unit}
    }

    function convertToMM() {
        if(unit === "Inch") {
            value = value * 25.4
            unit = "MM"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        getPrecipitationType,
        convertToInches,
        convertToMM
    }
}




function wind(value, time, place, type, unit, direction) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getDirection() {
        return direction
    }

    function convertToMPH() {
        if(unit === "MS") {
            value = value * 2.236936
            unit = "MPH"
        }

        return {value, unit}
    }

    function convertToMS() {
        if(unit === "MPH") {
            value = value * 0.44704
            unit = "MS"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        getDirection,
        convertToMPH,
        convertToMS
    }
}




function cloudCoverage(value, time, place, type, unit, UV, density, cloudType) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getUV() {
        return UV
    }

    function getDensity() {
        return density
    }

    function getCloudType() {
        return cloudType
    }

    return {
        ...weatherDataFunction,
        getUV,
        getDensity,
        getCloudType
    }
}


