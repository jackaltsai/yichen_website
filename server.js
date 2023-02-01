const express = require('express')
const app = express()


app.listen(3000, function() {
    console.log("Server is running on port 3000")
})

app.use(express.static("public"))


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})