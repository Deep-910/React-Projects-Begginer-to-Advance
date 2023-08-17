import React from 'react'
import { useState } from 'react'
import './Wheather.css';
const api = {
    key: "7e2e81ad61a37cf7ef91f08893780b02",
    base: "https://api.openweathermap.org/data/2.5/"

}

export const Wheather = () => {
    const [query, setQueary] = useState("");

    const Search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}wheather?q=${query}&units=metric&APPID=${api.key}`).then((res) => res.json()).then((result) => {
                setWheather(result);
                setQueary('');
            })
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sundays", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year} `
    }
    return (
        <div className={(typeof weather.main!= "undefined") ?((weather.main,temp> 16)? 'app warm ' : 'app') : 'app'}>
            <main>
                <div className='search-bar'>
                    <input type='text' className='search-bar' placeholder='Search....' value={query} onChange={e => setQueary(e.target.value)} onKeyPress={Search} />
                </div>
                {(typeof weather.main !="undefined")?(
                <div>
                    <div className='location-box'>
                        <div className='location'>
                            {weather.name},{weather.sys.country}
                        </div>
                            <div className='date'>{dateBuilder(new Date())}</div>
                            <div className='wheather-box'>
                                <div className='temp'>
                                    {Math.round(wheather.main.temp)}°C
                                </div>
                            </div>
                            <div className='weather'>
                                {weather.weather[0].main}
                            </div>
                    </div>
                </div>
    ) :('')}
            </main>
        </div>
    )
}
