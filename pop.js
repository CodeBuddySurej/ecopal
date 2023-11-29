const btn = document.getElementById('btnn');
const apiKey = "61Kf8N7d8lRCtLMJDSVy9Q==QRBY8GNJ2nkLvmcZ";
const disp = document.getElementById("popdisp");

const opt = {
    method: "GET",
    headers : {
        "X-Api-Key" :apiKey,
    },
};




 
async function getPOP(){
    const ciity = document.querySelector('.cityaa').value ;
    const apiURL = "https://api.api-ninjas.com/v1/city?name="+ ciity;
    const response = await fetch(apiURL, opt)
    const data = await response.json()
   
    console.log(data);
    if (data.length == "0"){
        document.getElementById('popdisp').innerHTML = "Check for spelling errors / Population of this city is currently unvailable."
       } 
    const population = data[0].population;
    document.getElementById('popdisp').innerHTML = "Population of " + ciity + " = " + population;
    
   
}

