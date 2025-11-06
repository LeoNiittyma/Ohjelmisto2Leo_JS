const num1 = prompt('Submit number one: ')
const num2 = prompt('Submit number two: ')
const num3 = prompt('Submit number three: ')
const num4 = prompt('Submit number four: ')
const num5 = prompt('Submit number five: ')

const array = [];

array.push(num1)
array.push(num2)
array.push(num3)
array.push(num4)
array.push(num5)

for (let i = array.length- 1; i >= 0; i--) {
    console.log(`${array[i]}`);
}