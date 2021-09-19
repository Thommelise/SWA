import { weatherData } from "./WeatherDataMixin.mjs";

function temperature(value, time, place, type, unit) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function convertToF() {
        if(unit === "C") {
            value = value * 1.8 + 32
            unit = "F"
        }
    }

    function convertToC() {
        if(unit === "F") {
            value = (value - 32) / 1.8
            unit = "C"
        }
    }

    return {
        ...weatherDataFunction,
        convertToF,
        convertToC
    }
}

let temp1 = temperature(78, 2000, "Horsens", "Sunny", "F")
temp1.convertToC()
console.log(temp1.getValue(), temp1.getUnit(), temp1.getType())


function precipitation(value, time, place, type, unit) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getPrecipitationType() {
        return type
    }

    function convertToInches() {
        if(unit === "MM") {
            value = value * 0.039370
            unit = "Inch"
        }
    }

    function convertToMM() {
        if(unit === "Inch") {
            value = value * 25.4
            unit = "MM"
        }
    }

    return {
        ...weatherDataFunction,
        getPrecipitationType,
        convertToInches,
        convertToMM
    }
}

let temp4 = precipitation(78, 1100, "Vejle", "Rain", "MM", "Storm")
temp4.convertToInches()
console.log(temp4.getValue(), temp4.getUnit())

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
    }

    function convertToMS() {
        if(unit === "MPH") {
            value = value * 0.44704
            unit = "MS"
        }
    }

    return {
        ...weatherDataFunction,
        getDirection,
        convertToMPH,
        convertToMS
    }
}

let temp6 = wind(5, 1030, "Copenhagen", "hurricane", "MS", "North")
temp6.convertToMPH()
console.log(temp6.getValue(), temp6.getUnit())

function cloudCoverage(value, time, place, type, unit, UV) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getUV() {
        return UV
    }

    return {
        ...weatherDataFunction,
        getUV
    }
}

let temp7 = cloudCoverage(100, 1913, "Midtjylland", "Normal", "M^2", 60)
console.log(temp7.getValue(), temp7.getUnit())

