
let airpollution = {
    apiKey : "7de7686ea75cd4150fe81212dc88ebad",
    fetchAP: function (){
      
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position , showError) {
              var latitude = position.coords.latitude;
              var longitude = position.coords.longitude;
              console.log(`Latitude: ${latitude}, Longitude: ${longitude}`
              
              )
              
        fetch(
            "http://api.openweathermap.org/data/2.5/air_pollution?lat=" + 
                  latitude + "&lon=" + longitude +
                  "&appid=" +
                  this.apiKey
              ).then((response) => {
                console.log(response.url);
              return response.json();
              referrerPolicy: "unsafe_url" 
            }).then((data) =>{
              const daa = data.list[0];
              const { aqi } = daa.main;
              const { co, no, no2, o3, so2, nh3} = daa.components;
              if (aqi == 1){
                document.getElementById('description').innerHTML = "Status = Good"
              } else if (aqi == 2){document.getElementById('description').innerHTML = "Status = Good" } 
               else if (aqi == 3){ document.getElementById('description').innerHTML = "Status = Fair"} 
               else if (aqi == 4){document.getElementById('description').innerHTML = "Status = Moderate" } 
               else if (aqi == 4){ document.getElementById('description').innerHTML = "Status = Poor"}
               else if (aqi == 5){  document.getElementById('description').innerHTML = "Status = Very Poor"}
              document.getElementById('aqpinfo').innerHTML = "Air Quality at " + latitude + " , " + longitude;
              document.getElementById('aqi').innerHTML = "Air Quality Index = " + aqi;
              document.getElementById('co').innerHTML = "Carbon Monoxide : " + co;
              document.getElementById('no').innerHTML ="Nitric Oxide : " + no;
              document.getElementById('no2').innerHTML ="Nitrogen Dioxide: " + no2;
              document.getElementById('o3').innerHTML ="Ozone : " + o3;
              document.getElementById('so2').innerHTML ="Sulphur Dioxide : " + so2;
              document.getElementById('nh3').innerHTML ="Ammonia : " + nh3;

              console.log(aqi, co, no, no2, o3, so2, nh3);
              console.log(no2);
            } )
            
            
                
            }); /* navigator closing */
    
            
          } /* if loop closing */ else{
            alert("Geolocation is not supported!");
          }
          
         
    }, /* fetch ap closing */ 
 

} /* letap closing */ 
 


function run (){
airpollution.fetchAP();


};


var apiKey ="7de7686ea75cd4150fe81212dc88ebad";
function idk(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`
          );

    fetch(
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=" + 
              latitude + "&lon=" + longitude +
              "&appid=" +
              this.apiKey
          ).then((response) => {
            
          return response.json();
          
        }).then((data) => console.log(data))
        
             
            
        }); /* navigator closing */

        
      } /* if loop closing */
     
 
      
}; /*function idk closing */


