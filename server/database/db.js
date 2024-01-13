import mongoose from 'mongoose';

const Connection = async(username, password) => {
    URL=`mongodb://${username}:${password}@${process.env.MONGODBURL}`;
                
    try{
        await mongoose.connect(URL);
        console.log("Database has connected succesfully.");

    }catch(error){
        console.log("Error connecting database.", error);
    }
}

export default Connection;