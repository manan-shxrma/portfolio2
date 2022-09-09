import mongoose from "mongoose"

const MONGO_URI = "mongodb+srv://manan_shxrma:mananS1234@test.tszep9k.mongodb.net/?retryWrites=true&w=majority"

const connectMongo = async() =>{
    try{
        const {connection} =  await  mongoose.connect(MONGO_URI)
         if (connection.readyState==1){
            console.log("Database connected")
         }

    } catch(errors){
        return Promise.reject(errors)
    }
}
export default connectMongo