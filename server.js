import express from "express";
import {APP_PORT} from "./config";
import routes from "./routes";
import errorHandler from "./middleware/errorHandler";
const app=express();

app.use("/api",routes);










app.use(errorHandler);
app.listen(APP_PORT,()=>{
    console.log(`server is listening on port no ${APP_PORT}`)
});