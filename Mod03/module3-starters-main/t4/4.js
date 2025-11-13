'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const ul = document.querySelector('#target');

let html = '';

for (let i = 0; i < students.length; i++) {
    const a = document.createElement('option');
    a.value = students[i].id;
    a.textContent = `${students[i].name}`;
    ul.append(a)
}
