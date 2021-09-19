import { weatherData } from "./WeatherDataMixin.mjs";

const weather1 = weatherData(11,1111,"via","rain","mm")

function weatherHistory() {
    let data = []
    

  

    function add(weather){
        
        data.push(weather)
        
    }

    function getAdd(){
        return data
    }




    return {add,getAdd}

}

 
let temp = weatherHistory(25.4,2000,"via","rain","mm")
let temp1 = weatherHistory(25.4,2000,"via","rain","mm")
temp1.add(weather1)


console.log(temp1.getAdd()[0].getPlace())



