const mongoose = require('mongoose')

const URL = 'mongodb+srv://miguelpedraza02:f8QDtEzMk7KfcoWy@cluster0.c6rcskt.mongodb.net/Events?retryWrites=true&w=majority'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(URL, options)
    .then(()=>{
        console.log('Successful connection to the DataBase')
    })
    .catch((error)=>{
        console.error(`Error connecting to DataBase ${error}`)
    })