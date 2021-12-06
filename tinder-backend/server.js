import express from 'express'
import mongoose from 'mongoose' 

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://YashPandey:kyascene@cluster0.okapi.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares


// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO CLEVER PROGRAMMERS!!!'));


// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));