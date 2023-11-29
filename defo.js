function getValue() {
    var dropdown = document.getElementById("continent");
    var value = dropdown.value;
    var text = dropdown.options[dropdown.selectedIndex].text;
    console.log(text);
 
    if (text == "Asia"){
    console.log("Asia is selected");
    location.href="as.html";
    } else if (text == "Europe"){
        console.log("Eu is selected");
        location.href="eu.html";
    } else if ( text == "North America"){
        console.log("na is selected");
        location.href="na.html";
    } else if (text == "South America"){
        console.log("Sa is selected");
        location.href="sa.html";
    } else if (text == "Africa"){
        console.log("africa is selected");
        location.href="afri.html";
    } else if ( text =="Oceania"){
        console.log("ocea is selected");
        location.href="ocea.html";
    }
}

