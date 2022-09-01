import axios from 'axios'

const api = {
    getWeather: ({city, country}) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=5de7e1d7b2299d7f228691833a9d8358&lang=nl`)
}

export default api