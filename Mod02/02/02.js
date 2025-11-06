'use strict'

const amount = parseInt(prompt('Number of participants: '))

const p_list = [];

for (let i = 0; i < amount; i++) {
    const name = prompt('Names of the participants: ')
    p_list.push(name)
}

const sorted = p_list.sort()

document.querySelector('.output').textContent = sorted;