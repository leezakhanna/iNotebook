const connectToMongo=require('./db')
const express = require('express')
connectToMongo();



const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json()) 
app.use('/api/Auth', require('./routes/Auth'));
app.use('/api/notes', require('./routes/notes'))
 
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})