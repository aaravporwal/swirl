const texts = [
    "Playing Basketball!",
    "Building Websites",
    "Travelling",
    "Sketching",
    "Photography",
    "Debating"
  ];
  
  let currentTextIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const element = document.getElementById('typing-h4'); 
    const currentText = texts[currentTextIndex];
  
    if (isDeleting) {
      charIndex--;
      element.innerHTML = currentText.substring(0, charIndex);
    } else {
      charIndex++;
      element.innerHTML = currentText.substring(0, charIndex);
    }
  
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(type, 500); 
    } else {
      setTimeout(type, isDeleting ? 80 : 100); 
    }
  }
  
  type();
  