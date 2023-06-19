const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

const port = 5000;
app.use(express.static(__dirname));

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height); // Convert height to meters
  var bmi = weight / (height * height);
  res.send(`Your BMI is ${bmi.toFixed(2)}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = req.body.n1;
  var num2 = req.body.n2;
  var result = Number(num1) + Number(num2);
  res.send(`The result of the calculation is ${result.toString()}`);
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
