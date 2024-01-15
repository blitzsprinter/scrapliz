"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messager_js_1 = require("./util/messager.js");
function execScrapeLearnn() {
    console.log("Sending message to content script to scrape learnn...");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // @ts-ignore
        chrome.tabs.sendMessage(tabs[0].id, { action: 'scrape_learnn' }, function (response) {
            console.log("Response from content script: " + response.message);
        });
    });
}
function execScrapeCoursera() {
    console.log("Sending message to content script to scrape coursera...");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // @ts-ignore
        chrome.tabs.sendMessage(tabs[0].id, { action: 'scrape_coursera' }, function (response) {
            console.log("Response from content script: " + response.message);
        });
    });
}
// @ts-ignore
document.getElementById("btnScrapeLearnn").addEventListener("click", execScrapeLearnn);
// @ts-ignore
document.getElementById("btnScrapeCoursera").addEventListener("click", execScrapeCoursera);
function init() {
    console.log("Loaded popup.js script!");
    //console.log("Current hostname: " + getCurrentHostname())
    (0, messager_js_1.sendMessage)();
}
init();
