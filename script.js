const quote=document.getElementById("quote");
const author=document.getElementById("author");
const api_url="https://qapi.vercel.app/api/random";
async function getquote(url) {
  const response=await fetch(url);
  const data=await response.json();
  console.log(data);  
  quote.innerHTML=data.quote;
  author.innerHTML=data.author;
}
getquote(api_url);
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"----by"+author.innerHTML,"Tweet window,","width=600, height=300");
}
function wp(){
    window.open("https://wa.me/?text="+quote.innerHTML+"----by"+author.innerHTML,"Tweet window,","width=600, height=300");
}