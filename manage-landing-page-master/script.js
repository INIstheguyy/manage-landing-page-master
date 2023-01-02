const hamburger = document.querySelector('.hamburger');
const mobileText = document.querySelector('.top-menu-text-mobile')

hamburger.addEventListener('click', function(){
    mobileText.style.display === "none"
    ? (mobileText.style.display = "block")(
        hamburger.setAttribute("src", "./images/icon-close.svg")
      )
    : (mobileText.style.display = "none")(
        hamburger.setAttribute("src", "./images/icon-hamburger.svg")
      );
})
