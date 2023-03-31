window.myEventListener = function myEventListener()
{
	//your code here
	let firstDiv = document.querySelectorAll("div")
	
	firstDiv[0].style.display = "none"

}
// If we want hide the second div after the first div disapears
// window.myEventListener = function myEventListener()
// {
// 	//your code here
// 	let firstDiv = document.querySelectorAll("div")
// 	if (firstDiv[0].style.display == "none") {
// 		firstDiv[1].style.display = "none"
// 	}
// 	firstDiv[0].style.display = "none"

// }
