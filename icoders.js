// Search like googele bar JS
function searchOnGoogle() {
  var searchQuery = document.getElementById("searchInput").value;
  var searchURL = "https://www.google.com/search?q=" + searchQuery;
  window.open(searchURL, "_self");
}

// c button for next page c program.html
const cButton = document.getElementById("C");

// Add an event listener for C button
cButton.addEventListener("click", function () {
  // Redirect to the C program page
  window.location.href = "Cprogarm.html";
});

// cpp button for next cpp page
const cppButton = document.getElementById("Cpp");

cppButton.addEventListener("click", function () {
  window.location.href = "C++program.html";
});

// button for php

const phpButton = document.getElementById("php");

phpButton.addEventListener("click", function () {
  window.location.href = "php.html";
});

// button for html/css
const htmlcssButton = document.getElementById("html/css");

htmlcss.addEventListener("click", function () {
  window.location.href = "htmlcss.html";
});

// for sql
const sqlButton = document.getElementById("sql");

sqlButton.addEventListener("click", function () {
  window.location.href = "sql.html";
});

// button for js
const jsButton = document.getElementById("js");

jsButton.addEventListener("click", function () {
  window.location.href = "javascript.html";
});

// end of first page of i coder

window.onload = function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
};
