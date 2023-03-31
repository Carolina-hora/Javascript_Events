// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	let stringA = document.querySelector("#firstNumber").value;
	//Return the value of the input #secondNumber
	let stringB = document.querySelector("#secondNumber").value;

	//your code goes here
	let inputCalculation = document.querySelector("#resultNumber")
	inputCalculation.value = parseInt(stringA)+parseInt(stringB)

};
