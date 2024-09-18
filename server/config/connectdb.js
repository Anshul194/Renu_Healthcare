// connectdb.js
import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://anshul:anshul112@clusterdatabase.24furrx.mongodb.net/renuapp?retryWrites=true&w=majority&appName=ClusterDatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDb;
