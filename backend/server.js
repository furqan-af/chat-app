import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());

   connectDB()
   .then(()=>{
    app.get('/', (req, res) => {
        res.send('Hello World!');
      });
      
      // Start the server
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
      
   } )
  .catch(err => console.error('MongoDB connection error:', err));


