const express = require ('express')
const mongoose = require ('mongoose')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const cookieParser = require('cookie-parser')
const { initDB } = require('./dbConfig')
//const jobsRouter = require('./routes/jobsRouter')
const authRouter = require('./routes/authRouter')
initDB()

const app = express()

// Middleware to set Content-Type header for JavaScript files
app.use('/js', (req, res, next) => {
    res.setHeader('Content-Type', 'text/javascript');
    next();
  });
  
app.use('/js', express.static('public/js'));

app.use('/css', (req, res, next) => {
    res.setHeader('Content-Type', 'text/css');
    next();
  });
  
  // Serve static files
app.use('/', express.static('/Users/vaibhav/Desktop/NaukariPortal/public'));



  


app.use(express.json())
app.use(cookieParser())

//app.use('/', jobsRouter)
app.use('/', authRouter)



app.get('/',(request, response) => {
response.sendFile('/Users/vaibhav/Desktop/NaukariPortal/public/home.html')
response.sendFile(path.join(__dirname,'../public', 'home.html'));
})

app.get('/jobs.html',(request, response) => {
    console.log("request for jobs")
    response.sendFile('/Users/vaibhav/Desktop/NaukariPortal/public/html/jobs.html')
});




app.listen(8000, () => {
    console.log("Server Successfully Started")
})


