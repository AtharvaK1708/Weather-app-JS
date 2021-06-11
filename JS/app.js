const fieldLocation = document.querySelector(".location")
const card = document.querySelector(".card")
const details = document.querySelector(".details")
const timeImg = document.querySelector(".time")
const iconImg = document.querySelector(".icon-img")


const updateUi = (data) =>
{
    const cityDetails = data.cityDetails
    const weatherDetails = data.weatherDetails[0]

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weatherDetails.Temperature.Metric.Value}</span>
    <span>&deg;C</span>


    `
    if(card.classList.contains("d-none"))
    {
        card.classList.remove("d-none")
    }
    if(weatherDetails.IsDayTime === true)
    {
        timeImg.setAttribute("src","images/day.svg")
    }
    else
    {
        timeImg.setAttribute("src","images/night.svg")
    }

    const i = weatherDetails.WeatherIcon
    iconImg.setAttribute("src",`images/icons/${i}.svg`)

   
}



const updateCity = async (city) =>
{
    const cityDetails = await getCity(city)
    const weatherDetails = await getWeather(cityDetails.Key)

    return {
        cityDetails,weatherDetails
    }
}





fieldLocation.addEventListener("submit",(e)=>
{
    e.preventDefault()
    const city = fieldLocation.city.value.trim()
    fieldLocation.reset()

    // ! update city details

    updateCity(city).then((data) =>
    {
        updateUi(data)
        console.log(data)

    }).catch((err) =>
    {
        console.log(err)
    })
})