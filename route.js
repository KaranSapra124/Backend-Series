// www.test.com
// www.test.com/contact
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>You are at home buddy!</h1>
</body>
</html>`);
    res.end();
  } else if (url == "/about") {
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ye Hum Hai , Aur Ye Hamara Information!</h1>
</body>
</html>`);
    res.end();
  } else {
    let value = res.statusMessage;
    let code = res.statusCode;
    code = 201
    value = "Connected!";
    res.write(`${value}${code}`);
    return res.end()
  }
});

server.listen(3000, () => {
  console.log("Server is Running!");
});
