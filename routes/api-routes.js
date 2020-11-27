module.exports = function(app) {
    app.post("/api/quiz_type", (req, res) => {
        console.log(req.body);
        return res.redirect("/quiz");
        
    })
}