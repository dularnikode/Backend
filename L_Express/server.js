import app from "./app.js";
import connectDB from "./data/database.js";

/**Connect DB */
connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is working");
});
