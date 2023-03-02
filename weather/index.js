document.querySelector(".button").addEventListener("click", () => {
  let location = document.querySelector(".location");
  if (!location.value) alert("Enter Location");
  let weather = document.querySelector(".weather");
  weather.innerHTML = "";
  let locationVal = location.value;
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    locationVal +
    "&appid=734a7a3794d201fd17b366210a1f24ec";
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    console.log("working");

    if (this.status === 200 && this.readyState === XMLHttpRequest.DONE) {
      try {
        let res = JSON.parse(this.responseText);
        console.log(res);
        weather.innerHTML = `            <div class="card mt-3 m-auto" style="min-height: 300px">
              <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" class="card-img" alt="img" style="max-height:250px";  />
              <div class="card-body">
                <h5 class="card-title">${res.name} , ${res.sys.country}</h5>
                <p class="card-text">
                  temp : ${res.main.temp}
                </p>
<p>${res.weather[0].description}</p>
              </div>
            </div>
`;
      } catch (err) {
        console.log(err);
      }
    }
  };
  xhr.send();
});
