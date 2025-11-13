'use strict'

const ul = document.querySelector('#target');

const a = document.createElement('li');
a.textContent = 'First item'
const b = document.createElement('li');
b.textContent = 'Second item'
const c = document.createElement('li');
c.textContent = 'Third item'

ul.appendChild(a)

ul.appendChild(b)

ul.appendChild(c)