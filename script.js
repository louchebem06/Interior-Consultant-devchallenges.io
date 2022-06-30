function toggle() {
	var hamburger = document.getElementById("hamburger");
	var nav = document.getElementById("nav");
	if (hamburger.classList.contains("hamburger")) {
		hamburger.classList.remove("hamburger")
		hamburger.classList.add("close")
		nav.style.display = "block"
	} else {
		hamburger.classList.add("hamburger")
		hamburger.classList.remove("close")
		nav.style.display = "none"
	}
}

function reportWindowSize() {
	var nav = document.getElementById("nav");
	if (window.innerWidth > 750) {
		nav.style.display = "block";
	} else {
		nav.style.display = "none";
	}
}

window.addEventListener('resize', reportWindowSize);