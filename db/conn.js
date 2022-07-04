import mongoose from "mongoose";
import {DB_URL} from "../config";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("mongoo connection failed");
  });