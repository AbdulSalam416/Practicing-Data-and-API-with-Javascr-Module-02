getData();

async function getData() {
  const data = JSON.parse(document.getElementById("data").textContent);
  for (item of data) {
    const root = document.createElement("p");
    const mood = document.createElement("div");
    const position = document.createElement("div");
    const date = document.createElement("div");

    mood.textContent = `Mood: ${item.mood}`;
    position.textContent = `Lat/Long: ${item.lat}, ${item.long}`;

    const dateString = new Date(item.timestamp).toLocaleDateString();
    date.textContent = `Date: ${dateString}`;

    root.append(mood, position, date);
    document.body.append(root);
  }
}
