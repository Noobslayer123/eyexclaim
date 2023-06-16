const express = require("express")
const app = express()
app.use((req,res,next) => {
  if (req.url.match("index.js")) {
    return res.redirect("/")
  }
  next()
})
app.use(express.static("."))
app.listen(process.env.PORT || 8080)
