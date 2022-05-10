import express from "express";
import clientsRouter from "./routes/clients";

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(clientsRouter);
app.set("view engine", "pug");
app.set("views", "./views");

app.listen(port, () => {
    console.log("server running on port", port);
});
