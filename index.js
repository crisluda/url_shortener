import express from "express";
import { database } from "./config/db.js";
import URL from "./routes/urlRoute.js";
database();

const PORT = process.env.PORT || 3000;
const app = express();

// app.get("/", (req, res) => {
//   res.send("123");
// });
app.use(express.json());
app.use("/", URL);
app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
