'use strict'

const ul = document.querySelector('#target');
const html =
    `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
    `;

ul.innerHTML = html;

document.getElementsByTagName('li')[1].innerHTML = '<li class="my-item">Second item</li> '