import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import sequelize from './config/database';
import router from './routes/school.routes';
import paymentRouter from './routes/payment.routes';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4401;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(router);
app.use(paymentRouter);

// Start the server
async function startServer() {
  try {
    // console.clear()
    await sequelize.sync({
      // force: true,
    });
    console.log('Database connected successfully');

    app.listen(port, () => {
      console.log('Server started http://localhost:' + port);
    });
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit the process with an error code
  }
}

startServer();
