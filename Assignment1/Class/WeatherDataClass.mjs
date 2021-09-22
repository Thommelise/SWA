import { EventDataType } from "./EventDataTypeClass.mjs";

class WeatherDataClass extends EventDataType {
    constructor(value, time, place, type, unit, dateFrom, dateTo) {
        super(time, place, type, unit)
        this.value = value
        this.dateFrom = dateFrom
        this.dateTo = dateTo
    }
    getTimeFrom(){
        return this.datefrom
    }

    getTimeTo() {
        return this.dateTo
    }
    getValue() {
        return this.value
    }
}

let weather = new WeatherDataClass(20, 2000, "VIA", "Snow", "mm")
console.log(weather.getType())

export { WeatherDataClass }