	
var operationString = "";
var x1 = "0";
var x2 = "";
var hasOperatorBeenPressed = false;
var operationComplete = false;

function operate(x, operator, y) {
	x = parseFloat(x); 
	y = parseFloat(y);
	operator = operator.charAt(operator.length-1);
	var result = 0;
	var resultString = "";
	if (operator === "+") {
		result = x + y;
	} else if (operator === "-") {
		result = x - y;
	} else if (operator === "*") {
		result = x * y;
	} else if (operator === "/") {
		result = x / y;
	} else if (operator === "%") {
		result = x % y;
	}

	resultString = result.toString();

	if (resultString.length > 11 && result > 999999999999 || result < -999999999999) {
		console.log(result);
		displayInteger.innerHTML = "Overflow";
	} else if (result % 1 !== 0) {
		result = result.toFixed(2);
		console.log(result);
		displayInteger.innerHTML = result;
	} else {
		console.log(result);
		displayInteger.innerHTML = result;		
	}
}

function isOperationComplete() {
	if (operationComplete) {
		resetCalc();
	}
}

function isOperatorActive(calcButton) {
	isOperationComplete();
	console.log(operationComplete);
	if (x1.charAt(0) === "0" && hasOperatorBeenPressed === false) {
		x1 = "";
	}
	if (hasOperatorBeenPressed === false && x1.length <= 11) {
		x1 += calcButton;
		displayInteger.innerHTML = x1;
	} else if (hasOperatorBeenPressed && x2.length <= 11) {
		x2 += calcButton;
		displayInteger.innerHTML = x2;
	} 	
}

function resetCalc() {
	x1 = "0";
	x2 = "";
	operationString = "";
	hasOperatorBeenPressed = false;
	b_correct.disabled = false;
	displayInteger.innerHTML = 0;
	displayOperator.innerHTML = "";
	operationComplete = false;
}

function continueCalc() {
	if (operationComplete === true) {
		operationComplete = false;
		x1 = displayInteger.innerHTML.toString();
		x2 = "";
		operationString = "";
	}
}

function continuedOperation(operatorSign) {
	if (hasOperatorBeenPressed === true && x2 !== "") {
		operate(x1, operationString, x2);
		operationString += operatorSign;
		console.log(operationComplete);
		displayOperator.innerHTML = operatorSign;	
		x1 = displayInteger.innerHTML.toString();
		operationString += operatorSign;
		x2 = "";
		b_decimal.disabled = false;
		console.log("Current state: " + x1, x2, operationString);
	} else {
		b_decimal.disabled = false;
		operationString += operatorSign;
		console.log(x1, x2, operationString);
		displayOperator.innerHTML = operatorSign;
	}
}

function deleteChar() {
	if (hasOperatorBeenPressed === false && x1.length > 1) {
		x1 = x1.substr(0, x1.length-1);
		displayInteger.innerHTML = x1;
	} else if (hasOperatorBeenPressed === true && x2.length > 1) {
		x2 = x2.substr(0, x2.length-1);
		displayInteger.innerHTML = x2;
	}
}

function keyPress(event) {
   if (event.ctrlKey || event.altKey || event.metaKey) {
      return;
   }

   if (event.type === "keydown") {
      switch (event.key) {
         default: return;
         case "0":
			isOperatorActive(0);
			console.log(x1, x2, operationString);
         	break;
         case "1":
			isOperatorActive(1);
			console.log(x1, x2, operationString);
         	break;
         case "2":
            isOperatorActive(2);
			console.log(x1, x2, operationString);
            break;
         case "3":
			isOperatorActive(3);
			console.log(x1, x2, operationString);
         	break;
         case "4":
            isOperatorActive(4);
			console.log(x1, x2, operationString);
            break;
         case "5":
			isOperatorActive(5);
			console.log(x1, x2, operationString);
         	break;
         case "6":
            isOperatorActive(6);
			console.log(x1, x2, operationString);
            break;
         case "7":
			isOperatorActive(7);
			console.log(x1, x2, operationString);
         	break;
         case "8":
            isOperatorActive(8);
			console.log(x1, x2, operationString);
            break; 
         case "9":
			isOperatorActive(9);
			console.log(x1, x2, operationString);
         	break;
         case "Backspace":
			deleteChar();
            break; 
         case ".":
         	if (b_decimal.disabled === true) {

         	} else {
         		isOperatorActive('.');
				b_decimal.disabled = true;
				console.log(x1, x2, operationString);
         	}
         	break;           	    
         case "/":
			continueCalc();
			hasOperatorBeenPressed = true;
			continuedOperation("/");
         	break; 
         case "*":
			continueCalc();
			hasOperatorBeenPressed = true;
			continuedOperation("*");
         	break;
         case "-":
			continueCalc();
			hasOperatorBeenPressed = true;
			continuedOperation("-");
         	break;  
         case "+":
			continueCalc();
			hasOperatorBeenPressed = true;
			continuedOperation("+");
         	break;
         case ",":
			continueCalc();
			hasOperatorBeenPressed = true;
			continuedOperation("%");
         	break;         	
          case "Delete":
			resetCalc();
         	break;         	         	       	           	
         case "Enter":
			b_correct.disabled = true;
			b_decimal.disabled = false;
			operate(x1, operationString, x2);
			operationComplete = true;
			console.log(operationComplete);
			displayOperator.innerHTML = "";
         	break;   
          case "c":
			displayOperator.innerHTML = "Calculator by:";
			displayInteger.innerHTML = "Balazs Birta";
         	break;                           
      }
   }
   event.stopPropagation();
}

const displayOperator = document.createElement('div');
document.querySelector('.displayOperator').appendChild(displayOperator);
displayOperator.innerHTML = "";

const displayInteger = document.createElement('div');
document.querySelector('.displayInteger').appendChild(displayInteger);
displayInteger.innerHTML = "0";

//Keyboard support

document.addEventListener("keyup", keyPress);
document.addEventListener("keydown", keyPress);

	const b_decimal 	= document.createElement('button');
	const b_correct 	= document.createElement('button');
	const b_mod 		= document.createElement('button');
	const b_credit 		= document.createElement('button');
	const b_seven 		= document.createElement('button');
	const b_eigth 		= document.createElement('button');
	const b_nine 		= document.createElement('button');
	const b_add 		= document.createElement('button');
	const b_four 		= document.createElement('button');
	const b_five 		= document.createElement('button');
	const b_six 		= document.createElement('button');
	const b_subtract 	= document.createElement('button');
	const b_one 		= document.createElement('button');
	const b_two 		= document.createElement('button');
	const b_three 		= document.createElement('button');
	const b_multiply 	= document.createElement('button');
	const b_delete 		= document.createElement('button');
	const b_zero 		= document.createElement('button');
	const b_equal 		= document.createElement('button');
	const b_divide 		= document.createElement('button');

	document.querySelector('.buttons').appendChild(b_delete);
	b_delete.innerHTML = "AC";
	b_delete.style.backgroundColor = "#F1763D";
	b_delete.addEventListener('click', function() {
		resetCalc();
	});

	document.querySelector('.buttons').appendChild(b_correct);
	b_correct.innerHTML = "del";
	b_correct.addEventListener('click', function() {
		deleteChar();
	});

	document.querySelector('.buttons').appendChild(b_mod);
	b_mod.innerHTML = "mod";
	b_mod.addEventListener('click', function() {
		continueCalc();
		hasOperatorBeenPressed = true;
		continuedOperation("%");
	});


	document.querySelector('.buttons').appendChild(b_divide);
	b_divide.innerHTML = "/";
	b_divide.addEventListener('click', function() {
		continueCalc();
		hasOperatorBeenPressed = true;
		continuedOperation("/");
	});

	document.querySelector('.buttons').appendChild(b_seven);
	b_seven.innerHTML = "7";
	b_seven.className = "number";
	b_seven.addEventListener('click', function() {
		isOperatorActive(7);
		console.log(x1, x2, operationString); 
	}); 
	b_seven.onkeydown = function() {
		isOperatorActive(7);
		console.log(x1, x2, operationString);		
	}

	document.querySelector('.buttons').appendChild(b_eigth);
	b_eigth.innerHTML = "8";
	b_eigth.className = "number";
	b_eigth.addEventListener('click', function() {
		isOperatorActive(8);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_nine);
	b_nine.innerHTML = "9";
	b_nine.addEventListener('click', function() {
		isOperatorActive(9);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_multiply);
	b_multiply.innerHTML = "*";
	b_multiply.addEventListener('click', function() {
		continueCalc();
		hasOperatorBeenPressed = true;
		continuedOperation("*");
	});

	document.querySelector('.buttons').appendChild(b_four);
	b_four.innerHTML = "4";
	b_four.addEventListener('click', function() {
		isOperatorActive(4);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_five);
	b_five.innerHTML = "5";
	b_five.addEventListener('click', function() {
		isOperatorActive(5);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_six);
	b_six.innerHTML = "6";
	b_six.addEventListener('click', function() {
		isOperatorActive(6);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_subtract);
	b_subtract.innerHTML = "-";
	b_subtract.addEventListener('click', function() {
		continueCalc();
		hasOperatorBeenPressed = true;
		continuedOperation("-");
	});

	document.querySelector('.buttons').appendChild(b_one);
	b_one.innerHTML = "1";
	b_one.addEventListener('click', function() {
		isOperatorActive(1);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_two);
	b_two.innerHTML = "2";
	b_two.addEventListener('click', function() {
		isOperatorActive(2);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_three);
	b_three.innerHTML = "3";
	b_three.addEventListener('click', function() {
		isOperatorActive(3);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_add);
	b_add.innerHTML = "+";
	b_add.addEventListener('click', function() {
		continueCalc();
		hasOperatorBeenPressed = true;
		continuedOperation("+");
	});

	document.querySelector('.buttons').appendChild(b_decimal);
	b_decimal.innerHTML = ".";
	b_decimal.addEventListener('click', function() {
		isOperatorActive('.');
		b_decimal.disabled = true;
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_zero);
	b_zero.innerHTML = "0";
	b_zero.addEventListener('click', function() {
		isOperatorActive(0);
		console.log(x1, x2, operationString);
	});

	document.querySelector('.buttons').appendChild(b_credit);
	b_credit.innerHTML = "cr";
	b_credit.addEventListener('click', function() {
		displayOperator.innerHTML = "Calculator by:";
		displayInteger.innerHTML = "Balazs Birta";
	});

	document.querySelector('.buttons').appendChild(b_equal);
	b_equal.innerHTML = "=";
	b_equal.addEventListener('click', function() {
		b_correct.disabled = true;
		b_decimal.disabled = false;
		operate(x1, operationString, x2);
		operationComplete = true;
		console.log(operationComplete);
		displayOperator.innerHTML = "";
	});