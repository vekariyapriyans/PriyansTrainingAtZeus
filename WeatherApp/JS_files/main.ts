const city=document.querySelector('#city') as HTMLInputElement
const form=document.querySelector('.search-form') as HTMLFormElement
const displayData=document.querySelector('.data') as HTMLDivElement

const key='AWaeMGsttqBNnOYpgQNRdLOCk68T18VP'
const fetchCity=async (city :string)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search'
    const query=`?apikey=${key}&q=${city}`
    const data=await (await fetch(base+query)).json()
    return data[0]
}
const fetchWeather=async (city_key :string)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/'
    const query=`${city_key}?apikey=${key}`
    const data=await (await fetch(base+query)).json()
    return data[0]
}

form.addEventListener('submit',e=>{
    e.preventDefault()
    const city_name=city.value.trim();
    // fetch data based on city name
    GetData(city_name)
})


// fetch data based on city name
function GetData(city_name){
    fetchCity(city_name)
    .then( data=>{
        city_name=data.EnglishName
        return fetchWeather(data.Key)
    })
    .then( data=>{
         updateDOM(data,city_name)
    })
    .catch(err=>console.log(err))
}
function updateDOM(data,city_name){
    console.log(data)
    console.log(data.IsDayTime)
    const mark=`
    <img src="/images/${data.IsDayTime?'day.svg':'night.svg'}" class="day-img" />
    <div class="weather-des">
      <img
        src="/images/icons/${data.WeatherIcon}.svg"
        alt="weather icon not found"
        class="weather-icon"
      />
      <p class="city-name">${city_name}</p>
      <p class="weather-class">${data.WeatherText}</p>
      <p class="temperature">${data.Temperature.Metric.Value} &deg;C</p>
    </div>`
    displayData.innerHTML=mark
    displayData.classList.remove('d-none')
    displayData.style.backgroundColor=data.IsDayTime?'#e6ecf6':'#243046'
    displayData.style.color=data.IsDayTime?'black':'white'
    const weatherIcon=document.querySelector('.weather-icon') as HTMLImageElement
    weatherIcon.style.backgroundColor=data.IsDayTime?'#eaf1fc57':'#6c7a95'
    window.localStorage.setItem('city',city_name)
}
if(window.localStorage.getItem('city')){
    GetData(window.localStorage.getItem('city'))
}
