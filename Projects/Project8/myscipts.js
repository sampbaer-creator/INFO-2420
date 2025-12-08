// --- Array of Large Images ---
var imgArray = [
    'Images/Tributes/hunt1.jpg',
    'Images/Tributes/HeliSkiingSm.jpg',
    'Images/Tributes/BikeCouple1Sm.jpg'
];

// --- Function to Swap Main Gallery Image ---
function swapImage(imgID) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = imgArray[imgID];
}

// --- Preload Images ---
function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var img = new Image();
        img.src = imgArray[i];
    }
}
