const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/api/tools", (req, res) => {
const tools = [];
tools[0] = {
    name: "React",
    creator: "Jordan Walke",
    year: "2013",
    description: "",
    percentUsed: "",
    img: "images/react.png"
}

tools[1] = {
    name: "Node",
    creator: "Ryan Dahl",
    year: "2009",
    description: "",
    percentUsed: "",
    img: "images/node.png"
}

tools[2] = {
    name: "Express",
    creator: "TJ Holowaychuk",
    year: "2010",
    description: "",
    percentUsed: "",
    img: "images/express.png"
}

tools[3] = {
    name: "MongoDB",
    creator: "Eliot Horowitz, Dwight Merriman, and Kevin Ryan",
    year: "2007",
    description: "",
    percentUsed: "",
    img: "images/mongodb.png"
}

tools[4] = {
    name: "MySQL",
    creator: "David Axmark, Allan Larsson, and Michael Widenius",
    year: "1995",
    description: "",
    percentUsed: "",
    img: "images/mysql.png"
}

res.json(tools);
})

app.listen(3001, () => {
    console.log("listening");
})