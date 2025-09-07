/*The great thing is that nested objects are supported and converted automatically.

For instance:
*/

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};
console.log( JSON.stringify(meetup) );
