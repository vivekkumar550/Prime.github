Array.prototype.isPrime = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i] <= 1) {
            return false
        }
        else {
            for (let i = 2; i < this[i] / 2; i++) {
                //if number is divisibled its not a prime number
                if (this[i] % i == 0) {
                    return false
                }
            }
            //if number is not divisibled, its a prime number
            return true
        }
        //else ends 

    }
}
const arr1 = [2, 3, 5, 11, 23]
console.log(arr1.isPrime())

const arr2 = [14, 15, 8, 9]
console.log(arr2.isPrime());