import mongoose  from "mongoose";
const  connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.mongodb_url)
        console.log(`database connection established`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDatabase             