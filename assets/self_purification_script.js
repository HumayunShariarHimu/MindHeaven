// Get references to the popup and close button
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');
    const fullscreenDiv = document.getElementById('fullscreenDiv');

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Fullscreen functionality
    fullscreenDiv.addEventListener('click', () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Safari
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE11
        document.documentElement.msRequestFullscreen();
      } else {
        alert("Full Screen API is not supported by this browser.");
      }
    });