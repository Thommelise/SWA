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

function add(){
    list.push(state)
}

function getAdd(){
    return list
}

    

    return {setPlace,add,getAdd,clearPlace}
}

 
let temp = weatherHistory(25.4,2000,"vidasda","rain","mm")
let temp1 = weatherHistory(25.4,2000,"via","rain","mm")
temp.add()


console.log(temp.getAdd()[0])



