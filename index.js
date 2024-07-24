const express = require('express');
const app = express();


//loading env file
require('dotenv').config();

const PORT = process.env.PORT || 4000; //either from process.env or 4000 port 

//middleware to parse request body
app.use(express.json());

//import routes for tood api
const todoRoutes = require('./routes/todos')

//mount our routes
//we can give our own directory hierarchy or what comes before the routes 
app.use('/api/v1', todoRoutes);

app.listen(PORT, ()=> {
    console.log(`Server running on port number : ${PORT}`)
})

//Db Connectin
const dbConnect = require('./config/database');
dbConnect();


//default route
app.get('/', (req, res) => {
    res.send(`<h1>This is home page</h1>`)
})