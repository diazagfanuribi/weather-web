window.addEventListener("load", () => {
  let long;
  let lat;
  let tempDesc = document.querySelector(".temperature-description");
  let timezone = document.querySelector(".location-timezone");
  let tempDegree = document.querySelector(".temperature-degree");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      console.log(pos);
      long = pos.coords.longitude;
      lat = pos.coords.latitude;
      const prxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/9d8065168812ce1ea00d97738f9d38de/${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const { temperature, summary } = data.currently;
          tempDesc.textContent = temperature;
          tempDegree.textContent = summary;
          timezone = data.timezone;
        });
    });
  }
});
