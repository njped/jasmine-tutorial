class MathUtils {
	add(a,b) {
		return a + b;
	}

	subtract(a,b) {
		let result
		if(this.isNumeric(a) && this.isNumeric(b)){
			result = a - b
		}
		else {
			throw new Error(`Either ${a} or ${b} is not a number`)
		}
		return result;
	}

	average(...numbers) {
		let sum = 0;
		for (let i = 0; i < numbers.length; i++) {
			if (this.isNumeric(numbers[i])){
				sum += numbers[i]
			}
			else {
				throw new Error(`${numbers[i]} is not a number`)
			}
		}
		return sum / numbers.length
	}

	isNumeric(n) {
		return typeof n === 'number'
	}
}