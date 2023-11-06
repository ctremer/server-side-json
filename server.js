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
    description: "React is a JavaScript library used for building user interfaces, known for its component-based architecture and efficient rendering. It allows developers to create dynamic and interactive UIs for single-page applications.",
    img: "images/react.png"
}

tools[1] = {
    name: "Node",
    creator: "Ryan Dahl",
    year: "2009",
    description: "Node.js is a runtime environment that allows developers to execute JavaScript code outside of a web browser, enabling server-side scripting and building scalable network applications. It is known for its event-driven architecture and non-blocking I/O, making it suitable for building fast and lightweight applications.",
    img: "images/node.png"
}

tools[2] = {
    name: "Express",
    creator: "TJ Holowaychuk",
    year: "2010",
    description: "Express is a minimal and flexible web application framework for Node.js, designed to simplify the process of building web applications and APIs. It provides a robust set of features for handling HTTP requests, routing, and middleware integration, making it popular for developing server-side applications.",
    img: "images/express.png"
}

tools[3] = {
    name: "MongoDB",
    creator: "Eliot Horowitz, Dwight Merriman, and Kevin Ryan",
    year: "2007",
    description: "MongoDB is a widely used open-source NoSQL database that stores data in flexible, JSON-like documents, providing high performance, scalability, and flexibility for handling large volumes of data. It is known for its dynamic schema and powerful querying capabilities, making it suitable for applications with evolving data models.",
    img: "images/mongodb.png"
}

tools[4] = {
    name: "MySQL",
    creator: "David Axmark, Allan Larsson, and Michael Widenius",
    year: "1995",
    description: "MySQL is an open-source relational database management system (RDBMS) that uses structured query language (SQL) for managing and manipulating data, known for its reliability, robustness, and ease of use. It is widely used for various applications that require structured data storage, including e-commerce platforms, content management systems, and data analytics tools.",
    img: "images/mysql.png"
}

res.json(tools);
})

app.listen(3001, () => {
    console.log("listening");
})