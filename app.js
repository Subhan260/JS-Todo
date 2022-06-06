function One(){
    let comment = "" ;
    let city = prompt(" Enter Your City Name ") ;
    if (city === "Karachi") {
        comment =  "Welcome To The City Of Lights"
    } else {
        comment = " Please Enter Karachi "
    } ;
    
    document.querySelector("#city").innerHTML = comment ;
    let gendermessege = "" ;
    let gender = prompt ("Please Enter Your Gender") ; 
    
    if (gender === "male" || gender === "Male" || gender === "M" || gender === "m") {
        gendermessege = " Good Morning Sir "
    }
     else if (gender === "female" || gender === "Female" || gender === "F" || gender === "f") {
        gendermessege = " Good Morning Ma'am "
    }
     else {
         gendermessege = " Good Morning "
     }
    
     document.querySelector("#gender").innerHTML = gendermessege ;
    
    
     let trafficColor = prompt("Enter Color Of Traffic Light") ; 
     
     let color_mean = "" ; 
     
        if (trafficColor == "red" || trafficColor == "Red" || trafficColor == "r" || trafficColor == "R") {
         color_mean =  "Must Stop"
     }  else if (trafficColor == "yellow" || trafficColor == "Yellow" || trafficColor == "y" || trafficColor == "Y") {
         color_mean = "Ready To Move"
     }  else if (trafficColor == "green" || trafficColor == "Green" || trafficColor == "g" || trafficColor == "G") {
         color_mean = " Move Now "
     }  else{
         color_mean = " Please Enter Valid Color "
     } ;
    
     document.querySelector("#traffic").innerHTML = color_mean ;
    
    
    
     let cFuel = prompt(" Enter Your Current Fuel In Liter "); 
     let fAlert = "" ;
    
     if ( cFuel < 0.25) {
         fAlert = " Please refill the fuel in your car "; 
     } else {
         fAlert = " You have enough fuel "; 
     } ;
    
     document.querySelector("#fAlert").innerHTML = fAlert ;
}