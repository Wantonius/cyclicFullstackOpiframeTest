const express = require("express");

let app = express();

let port = process.env.PORT || 3000

app.use("/",express.static("public"));

app.listen(port);

console.log("Running in port",port);