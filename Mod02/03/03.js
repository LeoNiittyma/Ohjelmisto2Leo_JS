'use strict'

const amount = 6

const p_list = [];

for (let i = 0; i < amount; i++) {
    const name = prompt('Names of the dogs: ')
    p_list.push(name)
}

const sorted = p_list.sort().reverse()

document.querySelector('.output').textContent = sorted;