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

