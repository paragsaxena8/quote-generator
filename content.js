let quotes = [
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
];

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    quotes = data;
    const quoteHTML = document.querySelector("#quote");
    const twitterLink = document.querySelector("#tweetLink");
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteHTML.innerHTML = `${quote.text} <br /> <pre> -${quote.author}</pre>`;
    twitterLink.href = `https://twitter.com/intent/tweet?text=${quote.text} \r\n - ${quote.author}`
  });
