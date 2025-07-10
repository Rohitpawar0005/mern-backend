import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors())

const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`)
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("✅ Server started on http://localhost:8080");
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//   });

  mongoose
  .connect(
    `mongodb+srv://${dbuser}:${dbpass}@cluster0.qjxhv.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });


app.use("/api/users", userRouter);