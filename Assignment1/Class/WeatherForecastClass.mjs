import { WeatherPrediction } from "./WeatherPredictionClass.mjs"



class WeatherForecastClass extends WeatherPredictionClass  {
    constructor(value, place, type, unit, dateFrom, dateTo){
    super(value, place, type, unit, dateFrom, dateTo)
    
}
    getPlaceFilter(){
        return this.place
    }
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

    setPeriodFilter(dateFrom, dateTo){
        this.dateFrom = dateFrom
        this.dateTo = dateTo
    }
    
    clearPeriodFilter(){
        delete this.dateFrom
        delete this.dateTo
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
   
    add(){  
       let data = [this.value, this.place, this.type, this.unit, this.dateFrom, this.dateTo]
        return data
    } 

}

let test = new WeatherForecastClass(100, 200, 20000, "MM", "light0", "C0")
test.setPeriodFilter("07/03/1999","01/02/2021")
test.convertToUSUnits()
console.log(test.add()[3])
 