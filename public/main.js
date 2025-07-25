const quoteText = document.getElementById("quoteText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
let currentQuote = "";

generateBtn.onclick = async () => {
  const res = await fetch("/api/quote");
  const data = await res.json();
  currentQuote = data.quote;
  quoteText.textContent = `"${currentQuote}"`;
  sentimentBtn.disabled = false;
  downloadBtn.disabled = false;
};

downloadBtn.onclick = () => {
  html2canvas(document.getElementById("card")).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "quote-card.png";
    link.click();
  });
};
