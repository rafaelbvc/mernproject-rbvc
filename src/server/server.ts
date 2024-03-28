import express from "express";

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
    res.render("index", {
        content: "EJS is <em>cool!</em>",
    });
});

server.listen("8080", "localhost", () => {
    console.info("Express server is listening at http://localhost:8080");
});
