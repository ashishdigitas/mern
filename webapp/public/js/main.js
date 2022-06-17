const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    // let url = 'api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metrics&appid=bc593da2fd1eb09513a640a71ef9cc4c';
    if (cityVal === "") {
        city_name.innerText = 'Please write the name before search';

    } else {
        try {
            let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metrics&appid=bc593da2fd1eb09513a640a71ef9cc4c`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            //temp_status.innerText = arrData[0].weather[0].main;
            console.log(arrData);
            const tempMood = arrData[0].weather[0].main;
            if (tempMood == "clear") {
                temp_status.innerHTML = "<i class = 'fas fa-sun' style='color:#eccc68;'></i>";
            } else if (tempMood == "clouds") {
                temp_status.innerHTML = "<i class ='fas fa-cloud' style='color:#f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class= 'fas fa-cloud-rain' style='color:#a4b0be'></i>";
            } else {
                temp_status.innerHTML = "<i class ='fas fa-cloud' style='color:#f1f2f6'></i>"
            }
        } catch {
            city_name.innerText = 'Please enter the city name properly';
        }
    }
}
submitBtn.addEventListener('click', getInfo);