// Immediately Invoked Function Expression (IIFE)
// () () => IIFE function structure first parnthesis is for function second parnthesis is for function execution


// IIFE function in Simple Function // Named IIFE
(function chai() {
    console.log("First Function")
})();


// IIFE function in Arrow Function // Unnamed IIFE with parameters
((name) => {
    console.log(`seconde Function ${name}`);
})("Abdullah");


// IIFE function in Arrow Function
(() => {console.log("seconde Function")})()

