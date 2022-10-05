const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fs = require("fs");
const html = fs.readFileSync("index.html").toString();

const dom = new JSDOM(html, { runScripts: "dangerously" });

const result = dom.window.eval("getSomething()");
console.log(result)
