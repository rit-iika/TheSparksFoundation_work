const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.redirect("/public/main.html");
});

 app.get("/joinus", (req, res) => {
 res.redirect("/joinus.html");
});

app.post("/submit", (req, res) => {
  const formData = JSON.stringify(req.body);
  console.log(formData);

  fs.appendFile("stored_data.txt", formData + "\n", function (err) {
    if (err) throw err;
    console.log("Updated data in file!");
  });

  //   res.send("<h1>Form submitted</h1>");
  res.redirect("/display.html");
});

app.listen(Process.env.PORT ||3000, () => {
  console.log("Listening on port", 3000);
});
