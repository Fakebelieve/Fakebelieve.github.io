/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

//Function to pass user inputted height and build a mario pyramid
function printPyramid() {
	let height = document.getElementById('height').value;
    let output = '';
    for(let rows = 1; rows <= height; rows++) {								//outer loop starts
        for(let space = height-1; space >= rows; space--) {		//inner loop adds spaces
               output += " ";
        }
        for(let brick = 0; brick <= rows; brick++) {					//inner loop adds bricks
            output += "#";
        }
        output += "\n";		//start next layer
    }											//outer loop stops
    console.log(output);	//print pyramid
}  
