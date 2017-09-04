var bet = function(n) {

	var red = [1, 3, 5, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
	var black = [2, 4, 6, 7, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]

	var spin = (function() {  
		return Math.floor(Math.random() * 36) + 1    
	})()

	var betType = {
		single: function(){
				if (typeof(n) === 'number'){
					if (spin === n){
						return "You did it!";
				} else {
						return "You lose!";
				}
				}
			}
		},
		color:
		snake:
		group:
		column:
	}
	
	// Case bet is a single number	
	if (typeof(n) === 'number'){
		if (spin === n){
			console.log("Yes")
		} else {
			console.log("No")
		}
	}
	
	// Case bet is 1ST or 2ND HALF
	if (n === "1half" || n === "2half") {
		if (spin >= 1 && spin < 19) {
			console.log("First half!")		
		} else {
			console.log("Second half!")
		}
	}

	// Case bet is 1ST 2ND or 3RD GROUP
	if (n === "1group" || n === "2group" || n === "3group") {
		if (spin >= 1 && spin < 13) {
			console.log("First group!")
		} else if (spin >= 13 && spin < 25) {
			console.log("Second group!")
		} else {
			console.log("Third group!")
		}
	}

	// Case bet is 1ST 2ND or 3RD COLUMN
	if (n === "1col" || n === "2col" || n === "3col") {
		if (spin % 3 === 1) {
			console.log("First column!")
		} else if (spin % 3 === 2) {
			console.log("Second column!")
		} else {
			console.log("Third column!")
		}
	}
	  
	// Case bet is RED or BLACK
	if (n === 'red' || n === 'black') {
		for (var r of red) {
			if ( spin === r ) {
			console.log("Red") 
			} 
		}
		for (var b of black) {
			if ( spin === b ) {
			console.log("Black") 
			} 
		}
	}

	// Case bet is EVEN or ODD
	if (n === 'even' && n !== 'odd') {
		if (spin % 2 == 0) {
			console.log("Even")
		} else {
			console.log('Odd')
		}
	}     

}

let yourBet = function('click', e) {
	return document.getElementById(e).value
}

// bet('red')

bet(yourBet)





