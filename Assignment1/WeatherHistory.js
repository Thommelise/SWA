function weatherHistory(place) {

    function weatherData
    

    function getPlaceFilter (){
        return place
    }

   function clearPlaceFilter(){
       delete place
   }


   return {
       getPlaceFilter,
       clearPlaceFilter
       
   }


}

let temp = weatherHistory("test")
temp.clearPlaceFilter()

console.log(temp.getPlaceFilter())