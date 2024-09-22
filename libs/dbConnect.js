import mongoose from "mongoose"

const connectDb = async () => {

    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect("mongodb+srv://xa1244661:HUNqmJ9pVVu6ZCU2@cluster0.jvwk4.mongodb.net/projects")
            console.log("MongoDb connected succesfully.")
        } catch (error) {
            console.log("Database connection fail : " + error)
        }
    }else{
        console.log("Already connected.")
    }
}
export default connectDb;