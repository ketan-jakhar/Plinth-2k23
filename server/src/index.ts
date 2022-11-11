require('dotenv').config;
import config from 'config';
import app from './app';
// import mongoose from 'mongoose';
let server: any;
// mongoose.connect(,).then(() => {
//   console.log('Connected to MongoDB');
//   server = app.listen(, () => {
//     console.log(`Listening to port ${}`);
//   });
// });

app.listen;

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});
