const express = require("express");

const path =require("path");

const app =express();


// Configure static files

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));


// Runing on local host 3000

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})

// Showing HTML files

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
