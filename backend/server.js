import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/db.js"
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser())



// userRoutes
import userRoutes from "./routes/user.routes.js"

app.use('/api/auth', userRoutes)

connectDB()
  .then(() => {
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  })
  .catch(err => console.error('MongoDB connection error:', err));


