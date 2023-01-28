"use static";

function setup() {
  let lat, long, img;

  const watchID = navigator.geolocation.watchPosition(async (position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });

  const button = document.getElementById("but");
  button.addEventListener("click", async () => {
    const mood = document.getElementById("mood").value;
    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitute").textContent = long;
    const data = { lat, long, mood };
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("/api", options);
    const json = await response.json();
    console.log(json);
  });
}
