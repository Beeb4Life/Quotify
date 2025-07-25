const getQuote = require("./getQuote");

const express = require("express");
const app = express();
const port = 3000;

//Api Routes

app.get("/api/quote", async (req, res) => {
    const randomquote = await getQuote();
    res.json(
        {
        quote: randomquote,
        });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});