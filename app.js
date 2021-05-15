const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=0f15f05e9c8d9393418970178a7e08b7&units=imperial"
    https.get(url, (response) => {
        console.log(response)
    })

    
    res.send("Hello World")
});


app.listen(3000, () => {
    console.log("Server listening on port 3000")
})