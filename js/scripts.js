// Mobile Nav
function toggleNav(toggleClass, activeClass) {
  if (document.querySelector('.' + toggleClass)) {
    function toggle() {
      if (!document.body.classList.contains(activeClass)) {
        document.body.classList.add(activeClass)
      } else {
        document.body.classList.remove(activeClass)
      }
    }
    document.querySelector('.' + toggleClass).addEventListener('click', toggle)
  }
}

toggleNav('nav-toggle', 'nav-active');


// Scroller
(function() {
    var scrolled = false;
    function scroller() {
	var offset = (!document.querySelector('.offset') ? 100 : document.querySelector('.offset').offsetHeight);
	var tempValue = scrolled;
	var position = window.pageYOffset;
	if (position > offset && scrolled == false) {
	    scrolled = true;
	} else if (position < offset && scrolled == true) {
	    scrolled = false;
	} else {
	    scrolled = scrolled;
	}
	if (scrolled != tempValue)
	    document.body.classList.toggle('scrolled');
    }
    window.addEventListener('scroll', scroller);
})()

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

document.querySelector('.next-slide')
    .addEventListener('click', function() { plusDivs(1) });
document.querySelector('.prev-slide')
    .addEventListener('click', function() { plusDivs(-1) });
