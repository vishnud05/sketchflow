import express from "express";
import v1Router from "./routes/v1/index.js";
const app = express();

app.use(express.json());

app.use("/api/v1", v1Router);

app.listen(3001, () => {
  console.log("\n\t🟢 [STARTED] :  http://localhost:3001 \n");
});
