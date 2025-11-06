const numbers = [2, 7, 4]
const numbers2 = []

function even(list) {

    for (let i = 0; i < list.length; i++) {
        const num = list[i]
        if (num % 2 === 0) {
            numbers2.push(num)
        }
    }
    return numbers2
}

const even_numbers = even(numbers)

console.log(numbers)
console.log(even_numbers)