import mongoose from "mongoose";
import app from "./app";
const port = 5000;

// database connection
async function DtabaseConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://CodeWithMongoose:7TIlqnrJc1hAL8Pd@cluster0.hn6ma.mongodb.net/"
    );
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log("server connected fail");
  }
}

DtabaseConnect();
