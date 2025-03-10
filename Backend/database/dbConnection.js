import mongoose from "mongoose";


export const dbConnection = ()=> {
    mongoose
    .connect(process.env.MONGO_URI, {dbName: "MERN_First_Project"})
    .then(()=>{
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Some error occured while connecting to the database:", err);
    });
};