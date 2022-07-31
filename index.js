const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

let extractedData;

fs.readFile("./resume.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);
    extractedData = data;
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

app.get("/", (req, res) => {
    res.render("index", { data: extractedData });
  });

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
