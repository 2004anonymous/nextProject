
const mongodb = require("mongoose")

export const getConnection = async () => {
    mongodb.connect("mongodb+srv://xa1244661:HUNqmJ9pVVu6ZCU2@cluster0.jvwk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => 
          console.log('MongoDB Connected'))
        .catch( (error: Error) => 
          console.log(error)
        );
}