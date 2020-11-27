// Require Express
const express = require("express");

// Create an instance of express
const app = express();

// Set initial port
const port = process.env.PORT || 3000;

// Use static files
app.use(express.static('public'));
// Setup Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
require("./routes/html-routes")(app);

// Start server and listen on port
app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`)
});