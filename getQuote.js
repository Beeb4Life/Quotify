const fs = require("fs/promises");

async function getQuote() {
    const quotesFile = JSON.parse( await fs.readFile("./quotes.json", "utf-8"));
    const quotes = quotesFile.map((quote) => {
        return {
            quote: quote.quoteText,
        };
    });
    return quotes[Math.floor(Math.random() * quotes.length)].quote;
}

module.exports = getQuote;