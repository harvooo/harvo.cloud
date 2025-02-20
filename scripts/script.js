document.addEventListener('DOMContentLoaded', function() {


    const textVariations = ["" , "harvo.cloud", "harv.", "harvo900", "harvo_", "harvo.cloud"];
    let currentIndex = 0;
    let currentText = "";
    let letterIndex = 0;
  
    const textElement = document.getElementById('text');
    const caretElement = document.getElementById('caret');
  
    function updateText() {
      currentText = textVariations[currentIndex];
  
      if (letterIndex >= currentText.length) {
        if (currentIndex < textVariations.length - 1) {d
          setTimeout(startTyping, 1000);
        } else {
          caretElement.style.animation = 'none';
        }
      } else {
        textElement.textContent = currentText.slice(0, letterIndex + 1);
        letterIndex++;
        setTimeout(updateText, 100);
      }
    }
  
    function startTyping() {
      caretElement.style.animation = 'blink 0.8s infinite';
      letterIndex = 0;
      currentIndex = (currentIndex + 1) % textVariations.length;
  
      setTimeout(updateText, 500); 
    }

    textElement.textContent = '\u200B';
  
    startTyping();
  });
  