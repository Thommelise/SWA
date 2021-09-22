import { weatherData } from "./WeatherDataMixin.mjs";



function weatherHistory(value, time, place, type, unit) {

const state = {value, time, place, type, unit}   
const weatherDataFunction = weatherData(state)

let list = []
    

function setPlace(data){
    state.place = data 
     return data
}

function clearPlace(){
    delete state.place
}

function setType(data){
    state.type = data
}

function clearType(){
    delete state.type 
}

function add(){
    list.push(state)
}

function getFilteredData(){
    return list
}

function convertToUSUints() {
    if(unit === "MM") {
        state.value = value * 1.8 + 32
        state.unit = "Inch"
    }
}

function convertToInternationalUnits() {
    if(unit === "Inch") {
        state.value = (value - 32) / 1.8
        state.unit = "MM"
    }
}
    

    return {
        ...weatherDataFunction,
        setPlace,
        clearPlace,
        setType,
        clearType,
        add,
        getFilteredData,
         
        convertToInternationalUnits,
        convertToUSUints
    }
}

 
let temp = weatherHistory(25.4,2000,"visdd","rain","MM")
let temp1 = weatherHistory(25.4,2000,"via","rain","MM")
temp.convertToUSUints()
temp.add()



console.log(temp.getFilteredData()[0].value)



