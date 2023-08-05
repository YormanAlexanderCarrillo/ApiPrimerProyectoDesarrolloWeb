const express = require('express')
const app = express()

app.set('PORT', process.env.PORT || 3001)
app.use(express.json())

app.listen(app.get('PORT'), ()=>{
    console.log(`Server running to port: ${app.get('PORT')} `)
})

require('./drivers/connect_db')
app.use('/event', require('./routes/event'))
app.use('/guest', require('./routes/guest'))
app.use('/organizer', require('./routes/organizer'))