function loadWindow(){
}

var windowSize = window.matchMedia("(max-width: 600px)");


window.onload = (event) => {
	document.getElementById("adjust-bg").style.backgroundSize = "cover";
	document.getElementById("adjust-bg").style.backgroundPosition = "-200 0";
	
	if (window.matchMedia("(max-width: 600px)")) { // If media query matches
		document.getElementById("adjust-bg").style.backgroundPosition = "50% 50%";
	}

};


