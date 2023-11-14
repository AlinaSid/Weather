const API = {
    endpoint: "http://api.openweathermap.org/data/2.5/",
    key:"c75c42fcaca9860c8dbde764ec9dd3c3"
}

const input= document.querySelector(".input")
input.addEventListener("keydown",function(e){
    if (e.keyCode === 13){
        getInfo(input.value)
    }
})

async function getInfo(data){
    const res= await fetch (`${API.endpoint}weather?q=${data}&units=metric&appID=${API.key}`)
    const result= await res.json()
console.log(result)
    displayResult(result)
}

function displayResult(result){
   let city=document.querySelector(".city")
   city.textContent=`${result.name},${result.sys.country}`

   getOurDate()
   
   let temperature= document.querySelector(".temperature")
   temperature.innerHTML=`${Math.round (result.main.temp)} <span>°</span> `

   let feelsLike= document.querySelector(".feelsLike")
   feelsLike.innerHTML=`${Math.round(result.main.feels_like) }<span>°</span> `

   let conditions=document.querySelector(".conditions")
   conditions.textContent=`${result.weather[0].main}`

   let variation=document.querySelector(".variation")
   variation.innerHTML="Min: "+`${Math.round (result.main.temp_min)}<span>°</span> ` + " " +"Max: "+`${Math.round(result.main.temp_max)}  <span>°</span> `

}


function getOurDate() {
    const myDate = new Date();
  
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const Months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    let day = days[myDate.getDay()];
  
    let todaydate = myDate.getDate();
  
    let month = Months[myDate.getMonth()];
  
    let year = myDate.getFullYear();
  
    let showDate = document.querySelector(".date");
  
    showDate.textContent =
      `${day}` + " " + `${todaydate}` + " " + `${month}` + " " + `${year}`;
  }
  