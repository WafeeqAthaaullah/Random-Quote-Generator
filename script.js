// script.js

// 1. Select the HTML elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("new-quote-btn");

// 2. Define the API URL
const api_url = "https://api.quotable.io/random";

// 3. The Function (Now Async!)
async function getQuote(url) {
    // Show a loading state so the user knows something is happening
    quoteText.innerText = "Loading...";
    authorText.innerText = "";

    try {
        // 'await' waits for the data to come back from the server
        const response = await fetch(url);
        
        // Convert the raw data into JSON (JavaScript Object)
        const data = await response.json();
        
        // Update the HTML with the new data
        quoteText.innerText = `"${data.content}"`;
        authorText.innerText = `- ${data.author}`;
        
    } catch (error) {
        // Handle errors (e.g., if the internet is down)
        console.error("Error fetching quote:", error);
        quoteText.innerText = "Oops! Could not fetch a quote.";
        authorText.innerText = "Please try again.";
    }
}

// 4. Event Listener
// Notice we pass 'api_url' into the function
button.addEventListener("click", () => getQuote(api_url));

// Optional: Load a quote as soon as the page opens
getQuote(api_url);