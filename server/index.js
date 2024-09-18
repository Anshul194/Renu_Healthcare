// index.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDb from './config/connectdb.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDb()
  .then(() => {
    // Start the server after successful DB connection
    app.listen(port, () => {
      console.log(`Server listening at localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1); // Exit if connection fails
  });


 app.use('/api', routes);
