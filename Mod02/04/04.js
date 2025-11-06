'use strict'

'use strict'

const numbers = [];

while (true) {
    let new_number = parseInt(prompt('Input numbers: '))
    if (new_number === 0){
        break
    }
    numbers.push(new_number)
}

numbers.sort((a,b) => a-b).reverse()

document.querySelector('.output').textContent = numbers;