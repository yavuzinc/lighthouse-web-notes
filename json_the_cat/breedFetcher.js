const request = require("request");

// module.exports = (breed, callback) => {
//   const options = {
//     url: `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
//     headers: {
//       "x-api-key": "1fcbbe61-3fb3-41d4-a0db-a442f227f1d0",
//     },
//   };
// };
var myArgs = process.argv.slice(2);
var result = myArgs[0];
request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + result,
  (error, response, body) => {
    if (result =! body["${name}"]) {
      console.log("We don't have any cat like that!");
    } else {
    const data = JSON.parse(body);
    console.log(data);
    }
  }
);
