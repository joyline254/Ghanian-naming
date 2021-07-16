const daysOfTheWeek=["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const female=["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"]
const male=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let btnCheck = document.querySelector('button');
let Result = document.querySelector('h1');
let inputDate =document.querySelector('#date');
let inputYear =document.querySelector('#year');
btnCheck.addEventListener('click', () =>{
    let date =inputDate.nodeValue;
    let year=inputYear.nodeValue;
    Result.innerText=moment('${date}/${year}','DD/YYYY', true).isValid();
});