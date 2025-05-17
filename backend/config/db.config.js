import mongoose from "mongoose";

// console.log(process.env.MONGO_URI);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('mongodb connected')
  } catch (err) {
    console.log('error in connect db', err)
  }
};

export default connectDb