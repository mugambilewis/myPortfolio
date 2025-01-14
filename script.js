var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


const words = ["Web Developer", "Web Designer", "Graphics Designer", "CAD Designer"];
let currentWordIndex = 0;
let currentLetterIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1000;

const typedTextSpan = document.getElementById("typed-text");

function type() {
  if (currentLetterIndex < words[currentWordIndex].length) {
    typedTextSpan.textContent += words[currentWordIndex].charAt(currentLetterIndex);
    currentLetterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (currentLetterIndex > 0) {
    typedTextSpan.textContent = words[currentWordIndex].substring(0, currentLetterIndex - 1);
    currentLetterIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

// Start the typing animation
/*document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, delayBetweenWords);
});
document.addEventListener('DOMContentLoaded', () => {
  const slideInElement = document.querySelector('.slideinleft');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        slideInElement.classList.add('active');
      }
    });
  });
  observer.observe(slideInElement);
});
*/
 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
 });

 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));
 