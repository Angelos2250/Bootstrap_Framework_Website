/* navbar & back-to-top */
var myScrollFunc = function() {
   var y = window.scrollY;
   if (y <= 700) {
        customID.className = "navbar navbar-light navbar-custom fixed-top hide";
        hNav.className = "text-black";
        blogo.className = "fab fa-bootstrap fa-2x text-black";
        burgerMenu.className = "btn btn-primary mx-3 px-4";
        back2top.className = "hide";
    } else {
        customID.className = "navbar navbar-light navbar-custom fixed-top scroll";
        hNav.className = "text-white";
        blogo.className = "fab fa-bootstrap fa-2x text-white";
        burgerMenu.className = "btn btn-primary mx-3 px-4 burgerScroll";
        back2top.className = "btn btn-secondary top far fa-arrow-alt-circle-up fa-2x hide";
    }
};

window.addEventListener("scroll", myScrollFunc);

/* Contact Form */
window.onload = function(){ 
    const contactForm = document.getElementById("contact-form");
    contactForm.onsubmit = event => {
        event.preventDefault();
    };
};


