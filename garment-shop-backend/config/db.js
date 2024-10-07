// // config/db.js
const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect("mongodb+srv://mayankthakur289mt:me0KHDRKoX77lqAm@cluster01.9zu3y.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster01", {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//         });
//         // console.log(`MongoDB Connected: ${conn.connection.host}`);
//         console.log('MongoDB Connected');
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };



const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://GAGANBAGHEL:1iYTRSl5JuCHftT2@cluster0.zhyo1sm.mongodb.net/dexter");
      console.log(`MongoDB Connected to: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      // Optional: Implement custom error handling (e.g., retry attempts)
      process.exit(1);
    }
  };

  module.exports = connectDB;