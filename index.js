const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
    console.log(`listening on port:${port}`)
})