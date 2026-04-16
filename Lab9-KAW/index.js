import fetch from 'node-fetch';

async function getWeather() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current=temperature_2m,cloud_cover,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m';

    let response = await fetch(url);
    let data = await response.json();

    let temp = data.current.temperature_2m;
    let cloud = data.current.cloud_cover;

    let w10 = data.current.wind_speed_10m;
    let w80 = data.current.wind_speed_80m;
    let w120 = data.current.wind_speed_120m;
    let w180 = data.current.wind_speed_180m;

    // 🌡️ Temperature
    if (temp < 0) {
        console.log("Temperature: Below freezing");
    } else if (temp === 0) {
        console.log("Temperature: Freezing");
    } else {
        console.log("Temperature: Above freezing");
    }

    // ☁️ Cloud Cover
    if (cloud <= 5) console.log("Cloud Cover: Clear");
    else if (cloud <= 25) console.log("Cloud Cover: Few");
    else if (cloud <= 50) console.log("Cloud Cover: Scattered");
    else if (cloud <= 87) console.log("Cloud Cover: Broken");
    else console.log("Cloud Cover: Overcast");

    // 💨 Wind behavior
    if (w10 < w80 && w80 < w120 && w120 < w180) {
        console.log("Wind Behavior: Windier higher");
    } else if (w10 > w80 && w80 > w120 && w120 > w180) {
        console.log("Wind Behavior: Windier lower");
    } else {
        console.log("Wind Behavior: Mixed wind behavior");
    }
}

getWeather();