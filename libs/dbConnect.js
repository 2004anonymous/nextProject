import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://xa1244661:HUNqmJ9pVVu6ZCU2@cluster0.jvwk4.mongodb.net/projects")
        console.log("Connected to database")
    } catch (error) {
        console.log("Connection fail : "+error)
    }
}
export default connectDb;