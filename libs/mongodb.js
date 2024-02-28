import React from 'react'
import mongoose from 'mongoose'

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected");
  } catch (error) {
    console.log("Mongo DB Connection err", error);
  }
}

export default connectMongodb
