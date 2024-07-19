const http = require("http"); //import http module to create server
const fs = require("fs");
// CRUD

// CREATED THE FILE
fs.appendFile("new.txt", "Vikas ke ghar mor nacha!", (err) => {
  if (err) {
    console.log("FIle Not Created!");
  }
});

// UPDATE THE FILE
fs.appendFile("new.txt", "Vikas mor ke sath nacha!", (err) => {
  if (err) {
    console.log("Vikas Nahi Nacha");
  }
});



const server = http.createServer((req, res) => {
  //creating the server
  // res.write(`<!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <title>Document</title>
  //   </head>
  //   <body>
  //   <h1>Your Calculated Result is!</h1>
  //   <li>${2 + 2}</li>

  //   </body>
  //   </html>`);
  fs.readFile("new.txt", (err, data) => {
    if (err) {
      console.log("Error reading the file");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end(); //ending the server by throwing the response as "HELLO"
    }
  });
});

// Delete
fs.unlink("new.txt", (err) => {
  console.log("File Not Found!");
});

server.listen(3000, () => {
  //PORT number on which the server is running
  console.log("Server is 🏃‍♀️!"); //Callback to make sure server is running!
});
