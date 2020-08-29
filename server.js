const express = require('express');
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')
const port = process.env.PORT || 4200
    //Se especifica las paginas que se quiere que sean de acceso publico
app.use(express.static(__dirname + '/public'))

//Express hbs


hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'miguel',
        anno: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {

    res.render('about', {
        anno: new Date().getFullYear()
    })
})

app.listen(port, () => {
    console.log(`Ingresa al puerto ${port}`)
})