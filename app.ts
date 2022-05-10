import express from "express";
import clientsRouter from "./routes/clients";

const app = express();
const port = 3000;

app.use(clientsRouter);

app.listen(port, () => {
    console.log("server running on port 3000");
});
