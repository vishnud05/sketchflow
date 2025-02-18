import express from "express";
import v1Router from "./routes/v1/index.js";
const app = express();

app.use("/api/v1", v1Router);

app.listen(3000, () => {
  console.log("\n\t🟢 [STARTED] :  http://localhost:3000 \n");
});
