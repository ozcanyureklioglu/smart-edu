const express = require("express");
const mongoose=require('mongoose');
const pageRouter=require('./routes/pageRoute');
const courseRouter=require('./routes/courseRoute');


const app = express();

//MONGODB CONNECTİON    
mongoose.connect('mongodb://localhost/smartedu-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Conection is succesfuly");
});


//MIDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TEMPLATE ENGİNE
app.set('view engine','ejs');


app.use(express.static('public'));

app.use('/',pageRouter);
app.use('/courses',courseRouter);


const port = 3000;

app.listen(port, () => {
  console.log(port + " bağlantı oldu");
});
