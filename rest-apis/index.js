// Create an express app.
const express = require("express");
const app = express();

// Tells the app to use body-parser. It knows to pass the data in the body in JSON.
const bodyParser = require("body-parser");
app.use(bodyParser.json());

/*
 * A database could go here instead.
 * Creating in-memory data for now.
 */
var data = [{ name: "Janvi Kalra", age: "25" }];

/*
 Create roots below. 
 */

app.get("/", (req, res) => {
  // Res data coming into the endpoint
  // Res data leaving the endpoint
  res.json(data);
});

app.post("/", (req, res) => {
  data.push(req.body);
  res.json(data);
});

// app.patch(uri, (req, res) => {...})
// app.delete(uri, (req, res) => {...})

// Run the application
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
