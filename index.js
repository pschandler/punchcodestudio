import http from "http";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify([1, 2, 3]));
});

const $PORT = process.env.PORT || 3100;
app.listen($PORT, () => console.log("app listening on port ", $PORT));
