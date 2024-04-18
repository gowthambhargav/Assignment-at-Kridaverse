import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv()





const connectDb = async ()=>{
    try {
const db = await mongoose.connect(process.env.DB_URI)
console.log(db.connection.host,"lhilkhk");
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}



export default connectDb

