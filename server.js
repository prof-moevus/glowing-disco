const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => {
  res.send('Bon matin! Good success!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})