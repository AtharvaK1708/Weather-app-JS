const key ="R6Slmb0GvpRBRvw1EEl6c0Zv7qY2sA1Y"


const getWeather = async (id) =>
{
    const weatherBase = "http://dataservice.accuweather.com/currentconditions/v1/"
    const cityKey = `${id}?apikey=${key}`

    const returnResponse = await fetch(weatherBase+cityKey)
    const weatherData = await returnResponse.json()
    
    return weatherData
}


const getCity = async (city) =>
{
    const base =  "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]

};



