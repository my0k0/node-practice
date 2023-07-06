const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
    const query = await axios.get('http://localhost:3001/results')
    res.render('index', {employees: query.data})
})

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})