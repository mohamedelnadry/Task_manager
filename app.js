const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
const notFound = require('./middleware/not-found')
require('dotenv').config()

// middleware 
app.use(express.static('./public')) 
app.use(express.json())


// routes
app.use('/api/v1/tasks' , tasks)
app.use(notFound)


const start =async () =>{
    try {
        await connectDB(process.env.MONGO_URL)


        app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!`))

    } catch (error) {
        console.log(error)
    }
}

start()
