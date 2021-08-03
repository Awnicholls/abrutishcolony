// const body = document.body;
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
// 	const currentScroll = window.pageYOffset;

// 	if (currentScroll <= 0) {
// 		body.classList.remove("scroll-up");
// 		return;
// 	}

// 	// Set the currentScroll Condition
// 	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
// 		body.classList.remove("scroll-up");
// 		body.classList.add("scroll-down");
// 	}

// 	// Set the currentScroll Condition
// 	if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
// 		body.classList.remove("scroll-down");
// 		body.classList.add("scroll-up");
// 	}

// 	// Set the lastScroll Position
// 	lastScroll = currentScroll;
// });

var navbar = document.querySelector('header')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

