import mongoose from 'mongoose';
import 'dotenv/config';

const connectionString = "mongodb://localhost:27017/";

export const initMongoDB = async() => {
    try {
      await mongoose.connect(connectionString);
      console.log('Conectado a la base de datos de MongoDB');
    } catch (error) {
      console.log(`ERROR => ${error}`);
    }
  }