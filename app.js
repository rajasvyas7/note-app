import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/index";
import cors from 'cors';


mongoose.connect("mongodb://127.0.0.1:27017/notes-app",  { useNewUrlParser: true });

const app = express();
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// catch 400
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

// catch 500
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Error: ${err}`);
  next();
});

routes(app);
export default app;
