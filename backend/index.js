import express from "express";
import cors from "cors";
import menuRoute from "./routes/menuRoute.js";
import imgAuthRoute from "./routes/imageAuthRoute.js";
import userRoute from "./routes/userRoute.js";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

// allow cross-origin requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(userRoute);
app.use("/admin", menuRoute);

app.use(imgAuthRoute);

app.listen(PORT, () => console.log(`listing on port :- ${PORT}...`));