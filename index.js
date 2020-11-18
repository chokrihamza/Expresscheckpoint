const express = require('express');
const app = express();
const port = 3002;
app.set('view engine', 'pug');
app.set('views', './views');
var d = new Date();
app.use(function (req, res, next) {

      if ((d.getDay() >= 0 && d.getDay() < 6) && (7 <= d.getHours() && d.getHours() <= 17)) {

            next()

      } else {

            return res.render('outofwork.pug');
      }

});

app.get('/', (req, res) => {
      res.render('Home.Pug')
})
app.get('/ContactUs', (req, res) => {
      res.render('ContactUs.Pug')
})
app.get('/OurServices', (req, res) => {
      res.render('OurServices.Pug')
})

app.listen(port, (err) => {
      if (err) console.log(err)
      console.log(`The server is running at ${port}`)
})