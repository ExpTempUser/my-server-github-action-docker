import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Docker with Express Server",
  })
})

app.listen(3000, () => {
  console.log(`Server is running on PORT 3000`)
})
