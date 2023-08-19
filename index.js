const app = require('express')();
const mongoose = require('mongoose');
const PORT = 8069;

// DB Connection
const MONGODB_URL = 'mongodb://adil:123@mongo:27017/admin';
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.get('/',(req,res)=>{
    res.json({msg : 'IG .. .... .. .....'});
})

app.listen(PORT, err => console.log(`Listening to PORT ${PORT}....`));