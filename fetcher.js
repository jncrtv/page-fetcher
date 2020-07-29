const request = require('request');

fs = require('fs');


request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile('./index.html', body, function (err) {
    if (err) return console.log(err);
  });
});

//https://www.google.com/fdsafsafsa.html.






// RESULT
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html