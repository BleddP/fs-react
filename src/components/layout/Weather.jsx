import { useState, useEffect } from "react"
import api from '../../api'

const Weather = () => {
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        api.getWeather({city: 'Taipei', country: 'tw'})
        .then((res) => {
            setWeather(res.data)
        }).catch((err) => {
            console.log(err)
        })
        .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading ? (<h4>Loading....</h4>) : (
                <div>
                    {weather?.main?.temp ? (
                        <div>
                            {weather.main.temp}
                        </div>
                    ) : <span>No temperature found...</span>}
                </div>
            )}
        </div>
    )
}

export default Weather