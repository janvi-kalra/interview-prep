// Create an express app.
const express = require("express");
const app = express();

// Tells the app to use body-parser. It knows to pass the data in the body in JSON.
// use() mounts specific middleware. app.use(path, callback)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Add error handling middleware
// Need to add try/catch to each endpoint. And need to pass in `next` into each.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!"); // Note the 500 server-side error
});

/*
 * A database could go here instead.
 * Creating in-memory data for now.
 */
var data = [{ name: "Janvi Kalra", age: "25" }];

/*
 Create roots below. 
 */

app.get("/", (req, res, next) => {
  // Res data coming into the endpoint
  // Res data leaving the endpoint
  try {
    res.json(data);
  } catch (err) {
    next(err);
  }
});

app.post("/", (req, res, next) => {
  try {
    data.push(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

app.get("/error", (req, res, next) => {
  try {
    res.json(data);
    throw new Error("beepboop");
  } catch (err) {
    next(err);
  }
});

// app.patch(uri, (req, res) => {...})
// app.delete(uri, (req, res) => {...})

// Run the application.
app.listen(3000, (err, req, res, next) => {
  console.log("Server is running on port 3000");
});
