// Require dependencies
const path = require("path");

// Routing

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
    
    app.get("/quiz", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/questions.html"))
    })
}

