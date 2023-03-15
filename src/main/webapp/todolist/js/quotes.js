const quotes = [

{
    quote: "When you have faults, do not fear to abandon them.",
    auther: "Confucius",
},
{
    quote: "hey must often change who would be constant in happiness or wisdom.",
    auther: "Confucius",
},
{
    quote: "Age is no guarantee of maturity.",
    auther: "Lawana",
},
{
    quote: "Youth isn’t always all it’s touted to be.",
    auther: "Lawana Blackwell",
},
{
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    auther: "Maya",
},
{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    auther: "Nelson Mandela",
},
{
    quote: "This too shall pass.",
    auther: "Et hoc transibit",
},
{
    quote: "Only I can change me life, no one can do it for me.",
    auther: "Carol Burnett",
},
{
    quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    auther: "Maxime",
},
{
    quote: "Believe in yourself.",
    auther: "Anonymous",
}
];


const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;