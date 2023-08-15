import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://satnamsingh:1234@nodeexpressprojects.mjjaozj.mongodb.net/next-auth?retryWrites=true&w=majority"
    );
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Erro connecting to database: ", error);
  }
};
