import { WeatherDataClass } from "./WeatherDataClass.mjs";

class Temperature extends WeatherDataClass {
    constructor(value, time, place, type, unit) {
        super(value, time, place, type, unit)
    }

    convertToF() {
        if(this.unit === "C") {
            this.value = this.value * 1.8 + 32
            this.unit = "F"
        }
    }

    convertToC() {
        if(this.unit === "F") {
            this.value = (this.value - 32) / 1.8
            this.unit = "C"
        }
    }
}

let temp1 = new Temperature(79, 2100, "Horsens", "Sunny", "F")
temp1.convertToC()
console.log(temp1.getValue(), temp1.getUnit())


class Precipitation extends WeatherDataClass {
    constructor(value, time, place, type, unit) {
        super(value, time, place, type, unit)
    }

    getPrecipitationType() {
        return type
    }

    convertToInches() {
        if(this.unit === "MM") {
            this.value = this.value * 0.039370
            this.unit = "Inch"
        }
    }

    convertToMM() {
        if(this.unit === "Inch") {
            this.value = this.value * 25.4
            this.unit = "MM"
        }
    }
}


class Wind extends WeatherDataClass {
    constructor(value, time, place, type, unit, direction) {
        super(value, time, place, type, unit)
        this.direction = direction
    }

    getDirection() {
        return this.direction
    }

    convertToMPH() {
        if(this.unit === "MS") {
            this.value = this.value * 2.236936
            this.unit = "MPH"
        }
    }

    convertToMS() {
        if(this.unit === "MPH") {
            this.value = this.value * 0.44704
            this.unit = "MS"
        }
    }
}


class CloudCoverage extends WeatherDataClass {
    constructor(value, time, place, type, unit, uv) {
        super(value, time, place, type, unit)
        this.uv = uv
    }

    getUv() {
        return this.uv
    }
}

let test = new CloudCoverage(22,22,22,22,22,22)

console.log(test.getUv())
