import mongoose from 'mongoose';

// Retrieve the MongoDB URI from the environment variable
const mongoURI = "mongodb://localhost:27017/test";

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);  // Exit the process with failure
  }
};

// Export the connection function
export default connectDB;