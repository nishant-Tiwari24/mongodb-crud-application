import React from 'react'
import mongoose from 'mongoose'

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected");
  } catch (error) {
    console.log("Mongo DB Connection err", error);
  }
}

export default connectMongoDB
