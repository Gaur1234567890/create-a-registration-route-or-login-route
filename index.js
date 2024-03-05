const express = require('express');
const app = express();
const env = require('dotenv');
const { adminRoute } = require('./src/routes/admin');
const { loginRouter } = require('./src/routes/login');

env.config();

app.use(express.json());
app.use('/api',adminRoute)
app.use('/api',loginRouter)

// lets create connection to db



let port = process.env.PORT;
app.listen(port,()=>{
    console.log('the process is runnning on port no',port);
})