//Here the date used its own toJSON() method.
let meeting = {
  title: "Team Sync",
  date: new Date(),
  location: "Hyderabad"
};

console.log(JSON.stringify(meeting));
/*
{"title":"Team Sync","date":"2025-08-26T00:55:12.133Z","location":"Hyderabad"}

*/
