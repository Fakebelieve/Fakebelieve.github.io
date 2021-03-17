/*
 * printPyramid
 *
 * Prints a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

//clear function
function clear(id) {
	let el = document.getElementById(id);
	if (el) {
		el.innerHTML = '';
	}
}

//Function to pass user inputted height and build a mario pyramid
function printPyramid() {
	clear('pyramid');
	let height = document.getElementById("height").value;
	let output = "";
	let rowstr = "";
	for (let rows = 1; rows <= height; rows++) {								//outer loop starts
		for (let space = height - 1; space >= rows; space--) {		//inner loop adds spaces
			output += ".";
			rowstr += ".";
		}
		for (let brick = 0; brick <= rows; brick++) {					//inner loop adds bricks
			output += "#";
			rowstr += "#";
		}
		output += "\n";		//start next layer

		//adds pyramid to pyramid div
		let pyra = document.createElement("p");
		let mid = document.createTextNode(rowstr);
		pyra.appendChild(mid);
		let element = document.getElementById("pyramid");
		element.appendChild(pyra);

		rowstr = "";
	}											//outer loop stops
	console.log(output);	//print pyramid
}  
