import axios from 'axios'

const token = null

const api = {
    getWeather: ({ city, country }) =>
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${token}&lang=nl`
        )
}

export default api
