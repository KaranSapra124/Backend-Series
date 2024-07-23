const express = require("express");
const app = express();
let arr = [];

app.use(express.json());

app.get("/", (req, res) => {
  //   res.send("Hi");
  res
    .json({
      Name: "Karan",
      phoneNum: 1234,
    })
    .status(201);
});

app.post("/add-data", (req, res) => {
  const { Name, Age } = req.body;
  console.log("Processing...");
  arr.push({ Name, Age });
  return res.json({
    message: "Data processed successfully!",
    data: arr,
  });
});

app.get("/contact",(req,res)=>{
  return res.send({message:"Contact Fetched!",data:{
    Name:"Karan",
    phoneNum:789013483
  }})
})

app.listen(3000, () => {
  console.log("Running!");
});
