import { WebSocketServer } from "ws";
import { JWT_SECRET } from "@repo/shared-server/config";
import jwt from "jsonwebtoken";

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", (ws, request) => {
  if (request.url) {
    const queryParams = new URLSearchParams(request.url.split("?")[1]);
    const token = queryParams.get("token") || "";
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

    if (decoded && typeof decoded != "string" && decoded.userId) {
      ws.on("message", (message) => {
        console.log(message);
        ws.send("Hello, client! How are you?");
      });
    }
  } else {
    ws.close();
    return;
  }
});
