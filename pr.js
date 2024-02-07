let button = document.getElementById("btn");
let input = document.getElementById("search");
let photo = document.getElementById("img1");

button.addEventListener("click" , (e)=>{
   let vvv = input.value;
   demo(vvv);
})

// let apikey = "b20559b33ee73fcab649a02f5506f734"
// let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="



async function demo(jagah)
 {
  try{
let data = await window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${jagah}&appid=b20559b33ee73fcab649a02f5506f734`)
 let fd =  await data.json();
 console.log(fd); 

let {main,wind,name,weather}= fd;
let rrr = document.getElementById("rainy"); 
let lll = document.getElementById("display_loc");
let ttt = document.getElementById("display_temp");
let hhh = document.getElementById("display_humidity");
let www= document.getElementById("display_wind");
 

ttt.innerHTML = `${parseInt(main.temp-273.15)}°C`;
lll.innerHTML = name;
hhh.innerHTML = `${main.humidity}%`;
www.innerHTML =  `${wind.speed}km/hr`;

photo.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

rrr.innerHTML= weather[0].description;


  }
  catch(e)
  {
    console.log("e");
  }
}
