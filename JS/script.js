const daysOfTheWeek=["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const female=["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"]
const male=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

let btnCheck = document.querySelector('button');
let result = document.querySelector('h1');

let inputMonth=document.querySelector('#month');
let inputDate =document.querySelector('#date');
let inputYear =document.querySelector('#year');

btnCheck.addEventListener('click', () =>{
    let month =inputDate.value;
    let date=inputYear.value;
    let year=inputYear.value;
    result.innerText=moment('${month}/ ${date}/${year}','MM/DD/YYYY', true) .isValid();
});
function onSubmit() {
    console.log("Function has been hit!!!");

    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);

    let exactDay = calculateDay(month, date, year)
}
function calculateDay(month, date, year) {
    let cc=(20);
    let mm=document.getElementById("month")
    let dd=document.getElementById("date")
    let yy=document.getElementById("year")
    let exactDay=  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
    console.log("Your Akan name is: " + exactDay)
    if (exactDay=1 && document.getElementById("Male")) {
       
    }
    else {
        document.getElementById("output").innerHTML = "Your Akan name is: " +female[0]; 
    }
    if (exactDay=2 && document.getElementById("Male")) {
        document.getElementById("output").innerHTML = "Your Akan name is:" +male[1];
        
    } else {
        document.getElementById("output").innerHTML = "Your Akan name is: " +female[1];
        
    }
    if (exactDay=3 && document.getElementById("Male")) {
        document.getElementById("output").innerHTML = "Your Akan name is:" +male[2]; 
        
    } else {
        document.getElementById("output").innerHTML = "Your Akan name is: " +female[2];
    }
    if (exactDay=4 && document.getElementById("Male")) {
        document.getElementById("output").innerHTML = "Your Akan name is:" +male[3]; 
        
        
    } else { 
        document.getElementById("output").innerHTML = "Your Akan name is: " +female[3];
        
    }
    if (exactDay=5 && document.getElementById("Male")) {
        document.getElementById("output").innerHTML = "Your Akan name is:" +male[3];
        
        
    } else {
        document.getElementById("output").innerHTML = "Your Akan name is: " +female[3];
        
    }
    if (exactDay=6 && document.getElementById("Male")) {
        document.getElementById("output").innerHTML = "Your Akan name is:" +male[5]; 
        
        
    } else {
        document.getElementById("output").innerHTML = "Your Akan name is: " +female[5];
        
    }
    if (exactDay=7 && document.getElementById("Male")) {
        document.getElementById("output").innerHTML = "Your Akan name is:" +male[6]; 
        
        
    } else {
        document.getElementById("output").innerHTML = "Your Akan name is: " +female[6];
    }  
    }
