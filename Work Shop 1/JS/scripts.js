function changeText() {
    var textsArray = ["Green", "Blue", "Yellow", "Red", "Grey"];  // Color names as text
    var colors = ["Reg", "Orange", "yellow", "red", "grey"];  // Matching color values
    
    // Loop through the textsArray and choose a random index
    for (let i = 0; i < textsArray.length; i++) {
        // Generate a random number between 0 and textsArray.length - 1
        var randomIndex = getRandomNumberBetween(0, textsArray.length - 1);
        
        // Get the color text and color name
        var colorText = textsArray[randomIndex];
        var color = colors[randomIndex];
        if (color = colorText){        // Matching the color
        var heading = document.getElementById("heading");
        }
        heading.innerHTML = colorText; // Set the text (color name)
        heading.style.color = color; // Set the color

    

    }
}
  
  function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  