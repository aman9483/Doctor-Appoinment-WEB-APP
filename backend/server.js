const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require("./Routes/auth");

 require('dotenv').config()

const app = express();





mongoose.connect(process.env.MONGO_URL ,{

   useNewUrlParser: true,
   useUnifiedTopology : true,
}).then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });


  app.use(cors());

app.use(express.json());

  app.use('/api/auth', authRoutes);

 

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);