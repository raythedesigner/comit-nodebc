/*
let siteName = window.prompt('Please input a website name');
let url = `https://${siteName}`
window.location.href=url;
*/

/*
let term = window.prompt('Please input a google search term');
let url = `https://google.com/search?q=${term}`
window.location.href=url;
*/

function SayHi() {
    alert('Hi from functionSayHi');
}
setTimeout(SayHi, 5000);
// setTimeout(function() {
//     alert('Hi after 5 seconds');
// }, 5000);