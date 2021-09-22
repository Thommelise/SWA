import { WeatherDataClass } from "./WeatherDataClass.mjs";


class WeatherHistoryClass extends WeatherDataClass {
    constructor(value, time, place, type, unit){
    super(value, time, place, type, unit)
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

    add(){  
        const data = [this.value, this.time, this.place, this.type, this.unit]
    } 

    getAdd(){
        let test = add() 
       return test    }

   
    


}

let test = new WeatherHistoryClass(100, 200, 20000, "VIA0", "light0", "C0")

test.add()
console.log(test.getAdd())
 