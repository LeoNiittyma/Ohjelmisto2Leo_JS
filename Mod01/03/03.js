'use strict'

const numero1prompt = prompt('First number: ')
const numero2prompt = prompt('Second number: ')
const numero3prompt = prompt('Third number: ')

const numero1 = parseInt(numero1prompt)
const numero2 = parseInt(numero2prompt)
const numero3 = parseInt(numero3prompt)

const summa = numero1 + numero2 + numero3
const product = numero1 * numero2 * numero3
const keskiarvo = summa / 3

document.querySelector('.output').textContent =
    ('Sum = ' + summa + ', Product =' + product + ', Average = ' + keskiarvo + '.');