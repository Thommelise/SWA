import { WeatherPrediction } from "./WeatherDataClass.mjs";


class WeatherForecastClass extends WeatherPrediction {
    constructor(value, time, place, type, unit)
    super(value, time, place, type, unit)

   

    setPlacefilter(place){
        place = this.place
    }

    clearPlaceFilter(){
       delete this.place 
    }

    setTypeFilter(type){
        type = this.type
    }
    clearTypeFilter(){
        delete this.type
    }

    setPeriodFilter(time){
        time = this.time
    }

    clearPeriodFilter(){
        delete this.time
    }

    convertToUSUnits() {
        if(this.unit === "MM") {
            this.value = this.value * 0.039370
            this.unit = "Inch"
        }
    }

    convertToInternationalUnits() {
        if(this.unit === "Inch") {
            this.value = this.value * 25.4
            this.unit = "MM"
        }
    }

    add(data){
    
    }


}