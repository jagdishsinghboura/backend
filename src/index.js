import dotenv from "dotenv"
import connectDB from './db/index.js';


dotenv.config({
    path:'./env'
})



connectDB()
    .then(()=>{
        app.listen(process.env.PORT || 8000),()=>{
            console.log(`server i lsting at port :${process.env.PORT}`)
        }
    })
    .catch(()=>console.log("MONGODB connection failed"))























// !(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }catch(err){
//         console.error("ERROR", err)
//         throw err;
//     }
// })()