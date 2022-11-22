const express = require("express");
const app = express();
const ytdl = require("ytdl-core");
const fs = require("fs");

app.use(express.json());

app.get("/download", (req, res) => {
  const url = req.query.url;
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(url, {
    format: "mp4",
  }).pipe(res);
});

app.listen(PORT||3000, () => {
  console.log("server on 3000");
});
