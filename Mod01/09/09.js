const luku = prompt('Submit a number: ')

let result = ''

let alkuluku = true

if (luku >= 2) {
    for (let i = 2; i < luku; i++) {
        if (luku % i === 0) {
            alkuluku = false
            break;
        }
    }
    if (alkuluku === true) {
        result = 'Luku on alkuluku';
    }  else {
        result = 'Luku ei ole alkuluku';
    }
}
else {
    result = 'Luku ei ole alkuluku'
}

document.querySelector('.output').textContent = result;