import { EventDataType } from "./EventDataTypeClass.mjs";
import {weatherDataClass} from  "./WeatherDataClass.mjs"

class weatherPrediction extends EventDataType {
    constructor(minValue, maxValue, time, place, type, unit) {
        super(time, place, type, unit)
        this.minValue = minValue
        this.maxValue = maxValue
    }

    getMin() {
        return this.minValue
    }

    getMax() {
        return this.maxValue
    }

    matches(weatherDataClass){
        if(weatherDataClass.getTime() === this.time && weatherDataClass.getPlace() === this.place && weatherDataClass.getType() === this.type && weatherDataClass.getUnit() === this.unit && weatherDataClass.getValue() >= this.minValue && weatherDataClass.getValue() <= this.maxValue){
            return true
        } else {
            return false
        }
    }
}

export {weatherPrediction}