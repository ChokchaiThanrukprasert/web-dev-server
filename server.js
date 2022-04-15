import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./tuits/tuits-controller.js";
import mongoose from "mongoose";

const app = express();

// Enable CORS
app.use(cors());

// Parse request with JSON body.
app.use(express.json());

// 3. Creating HTTP controllers
helloController(app);

// 4. Interacting with a Web server using Postman
userController(app);

// 5. Implementing RESTful Web service APIs
tuitsController(app);

// Connect to mongoDB.
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
  || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

// Run server based on setting or use port 4000 if setting not detected
app.listen(process.env.PORT || 4000);
