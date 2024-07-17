const http = require("http"); //import http module to create server
const server = http.createServer((req, res) => {
  //creating the server
  res.end("HELLO"); //ending the server by throwing the response as "HELLO"
});

server.listen(3000, () => {
  //PORT number on which the server is running
  console.log("Server is 🏃‍♀️!"); //Callback to make sure server is running!
});
