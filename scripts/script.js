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
    let month = document.getElementById("mm").value;
    let date = document.getElementById("dd").value;
    let year = document.getElementById("yr").value;
    const genderMale = document.getElementById('Male');
    const genderFemale = document.getElementById('Female');
    //Make sure user enters values
    if (month == "") {
        alert("Month can not be empty")
    } else if (date == "") {
        alert("Date can not be empty")
    } else if (year == "") {
        alert("Year can not be empty")
    } else {
        //Validate the inputs values
        if (month <= 0 || month >= 12) {
            alert("This is an invalid number for month")
        }
        else if (date <= 0 || date >= 31) {
            alert("This is an invalid number for date")
        }
        else if (year <= 1900 || year >= 2021) {
            alert("This is an invalid number for month")
        }
        else if (genderMale.checked == false && genderFemale.checked == false) {
            alert("Please select your gender")
        }
        else {
            //Get the exact day of the week
            let y = year.toString();
            let CC = y.slice(0, 2);
            let YY = y.slice(2, 4);
            let MM = month;
            let DD = date;
            let day = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
            let exactDay = Math.trunc(day);
            console.log(exactDay);
            if (genderMale.checked) {
                document.getElementById('output').innerHTML = "Your Akan name is: " + male[exactDay];
            }
            else {
                document.getElementById('output').innerHTML = "Your Akan name is: " + female[exactDay];
            }
        }
    }
}
    
    // if (exactDay=2 && document.getElementById("Male")) {
   //      "Your Akan name is:" +male[1];
    //    
    //} else {
      //  document.getElementById.innerHTML = "Your Akan name is: " +female[1];
        
    //}
    //if (exactDay=3 && document.getElementById("Male")) {
      //  document.getElementById.innerHTML = "Your Akan name is:" +male[2]; 
        
    //} else {
      //  document.getElementById.innerHTML = "Your Akan name is: " +female[2];
    //}
    //if (exactDay=4 && document.getElementById("Male")) {
      //  document.getElementById("output").innerHTML = "Your Akan name is:" +male[3]; 
        
        
  //  } else { 
       // document.getElementById.innerHTML = "Your Akan name is: " +female[3];
        
    //}
    //if (exactDay=5 && document.getElementById("Male")) {
      //  document.getElementById.innerHTML = "Your Akan name is:" +male[4];
        
        
    //} else {
      //  document.getElementById.innerHTML = "Your Akan name is: " +female[4];
        
    //}
    //if (exactDay=6 && document.getElementById("Male")) {
       // document.getElementById.innerHTML = "Your Akan name is:" +male[5]; 
      //
        
 //   } else {
   //     document.getElementById.innerHTML = "Your Akan name is: " +female[5];
        
    //}
    //if (exactDay=7 && document.getElementById("Male")) {
      //  document.getElementById.innerHTML = "Your Akan name is:" +male[6]; 
        
        
    //} else {
      //  document.getElementById.innerHTML = "Your Akan name is: " +female[6];
    //}  
//}
