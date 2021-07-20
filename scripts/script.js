const daysOfTheWeek = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(daysOfTheWeek);
const female=["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
console.log(female);
const male=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
console.log(male);
//let btnCheck = document.querySelector('button');
//let result = document.querySelector('h1');

//let inputMonth=document.querySelector('#month');
//let inputDate =document.querySelector('#date');
//let inputYear =document.querySelector('#year');

//btnCheck.addEventListener('click', () =>{
    //let month =inputDate.value;
    //let date=inputYear.value;
    //let year=inputYear.value;
  //  result.innerText=moment('${month}/ ${date}/${year}','MM/DD/YYYY', true) .isValid();
//});


function getInputValues() {
   //console.log("Good to go");

    let month =document.getElementById("mm").value;
    let date =document.getElementById("dd").value;
    let year =document.getElementById("yr").value;

    const gender= document.querySelector('input[name="Gender"]:checked').value;

    //Make sure user enters values
    if (mm=="") {
        alert("Month can not be empty")
        return false;
        
    }
    if (dd=="") {
        alert("Date can not be empty")
        return false;
        
    }
    if (yr=="") {
        alert("Year can not be empty")
        return false;
        
    }

//Validate the inputs values
if (mm<=0 || mm>=12) {
     var error=alert("This is an invalid number for month")
    
}
else if(dd<=0 || dd>=31) {
   var error=alert("This is an invalid number for date")
   
}
else if (yr<=1900 || yr>=2021) {
    var error=alert("This is an invalid number for month")
   
}
else
{
    var error="";
}   
//Incase user leaves it blank
if (error!="") 
{
    alert(error);
    console.log(error)
    return
    
}
//Get the exact day of the week
let y=yr.toString();
let cc=y.slice(0,2);
let yy=y.slice(2,4);
let day=(((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7
let exactDay=Math.trunc(day);
//console.log(exactDay);


    if (exactDay=1 && document.getElementById("Male")) {
        "Your Akan name is: "+male[0]
       
    }
    else {
        document.getElementById.innerHTML = "Your Akan name is: " +female[0]; 
    }
    if (exactDay=2 && document.getElementById("Male")) {
         "Your Akan name is:" +male[1];
        
    } else {
        document.getElementById.innerHTML = "Your Akan name is: " +female[1];
        
    }
    if (exactDay=3 && document.getElementById("Male")) {
        document.getElementById.innerHTML = "Your Akan name is:" +male[2]; 
        
    } else {
        document.getElementById.innerHTML = "Your Akan name is: " +female[2];
    }
    if (exactDay=4 && document.getElementById("Male")) {
        document.getElementById("output").innerHTML = "Your Akan name is:" +male[3]; 
        
        
    } else { 
        document.getElementById.innerHTML = "Your Akan name is: " +female[3];
        
    }
    if (exactDay=5 && document.getElementById("Male")) {
        document.getElementById.innerHTML = "Your Akan name is:" +male[4];
        
        
    } else {
        document.getElementById.innerHTML = "Your Akan name is: " +female[4];
        
    }
    if (exactDay=6 && document.getElementById("Male")) {
        document.getElementById.innerHTML = "Your Akan name is:" +male[5]; 
        
        
    } else {
        document.getElementById.innerHTML = "Your Akan name is: " +female[5];
        
    }
    if (exactDay=7 && document.getElementById("Male")) {
        document.getElementById.innerHTML = "Your Akan name is:" +male[6]; 
        
        
    } else {
        document.getElementById.innerHTML = "Your Akan name is: " +female[6];
    }  

}