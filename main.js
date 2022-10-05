//
// Usage:
//
// npm install
// node main.js
//

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fs = require("fs");
const html = fs.readFileSync("index.html").toString();

const dom = new JSDOM(html, { runScripts: "dangerously" });

const result = dom.window.eval("getSomething()");

// output: Some text here
console.log(result)
