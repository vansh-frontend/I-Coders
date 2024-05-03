 // Function to set the mode
 document.addEventListener('DOMContentLoaded', function() {
    var savedMode = localStorage.getItem('selectedMode');

    if (savedMode) {
        setMode(savedMode);
        document.getElementById('mode-toggle').checked = savedMode === 'dark';
    } 
    else {
        setMode('light'); // Default mode
    }

    document.getElementById('mode-toggle').addEventListener('change', function() {
        var selectedMode = this.checked ? 'dark' : 'light';
        localStorage.setItem('selectedMode', selectedMode);
        setMode(selectedMode);
    });
});

function setMode(mode) {
    var body = document.body;
    var lightModeImage = document.querySelector('.light-mode-img');
    var darkModeImage = document.querySelector('.dark-mode-img');

    if (mode === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        if (lightModeImage) {
            lightModeImage.style.display = 'inline';
        }
        if (darkModeImage) {
            darkModeImage.style.display = 'none';
        }
    } else if (mode === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        if (lightModeImage) {
            lightModeImage.style.display = 'none';
        }
        if (darkModeImage) {
            darkModeImage.style.display = 'inline';
        }
    }
}



// Search like googele bar JS
function searchOnGoogle(){
    var searchQuery = document.getElementById('searchInput').value;
    var searchURL ='https://www.google.com/search?q='+searchQuery;
    window.open(searchURL,'_self');
}


// c button for next page c program.html
const cButton = document.getElementById('C');

// Add an event listener for C button
cButton.addEventListener('click', function() {
  // Redirect to the C program page
  window.location.href = 'Cprogarm.html';
});

// cpp button for next cpp page
const cppButton = document.getElementById('Cpp');

cppButton.addEventListener('click', function() {


  window.location.href = 'C++program.html';
});

// button for php

const phpButton = document.getElementById('php');

phpButton.addEventListener('click',function(){

    window.location.href = 'php.html';
});

// button for html/css 
const htmlcssButton = document.getElementById('html/css');

htmlcss.addEventListener('click',function(){

    window.location.href = 'htmlcss.html';

});

// for sql
const sqlButton = document.getElementById('sql');

sqlButton.addEventListener('click',function(){

    window.location.href = 'sql.html';
});

// button for js
const jsButton = document.getElementById('js');

jsButton.addEventListener('click',function(){

    window.location.href = 'javascript.html';
    

});

// end of first page of i coder

 window.onload = function() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    };