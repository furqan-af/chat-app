const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log('MongoDB Connected');
    } catch (error) {
      console.error('MongoDB Connection Error:', error);
      process.exit(1); // Exit process with failure
    }
  };

  export default connectDB;  