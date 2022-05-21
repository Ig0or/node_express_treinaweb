import express from "express";
import methodOverride from "method-override";

import clientsRouter from "./routes/clients";
import db from "./db";

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(clientsRouter);
app.set("view engine", "pug");
app.set("views", "./views");

db.sync()
    .then(() => {
        console.log(`Connected ${process.env.DB_NAME}`);
    })
    .then(() => {
        app.listen(port, () => {
            console.log("server running on port", port);
        });
    });
