window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here// if we put the <script> in the end of the body (instead of the <head>) we don't need the window.onload function 
};

//the listener function here
let greenButton = document.querySelector("#theGreen")
greenButton.addEventListener ("click", () => {
	alert("woohoo!")
})