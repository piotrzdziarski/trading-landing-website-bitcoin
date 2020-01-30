const names = require('../stores/names');
const getRandomNumberFromRange = require('../helpers/getRandomNumberFromRange');
const notificationRegister = document.getElementById('notification-register');
const notificationRegisterName = document.getElementById('notification-register-name');

const letters = 'ABCDEFGHIJKLMNOPRSTUWZ';

setTimeout(displayNotification, getRandomNumberFromRange(1000, 2000));

function displayNotification() {
    const name = names[getRandomNumberFromRange(0, names.length - 1)];
    const surnameLetter = letters.charAt(getRandomNumberFromRange(0, letters.length - 1));

    notificationRegisterName.innerHTML = name + ' ' + surnameLetter + '.';
    notificationRegister.classList.add('slide-in');

    setTimeout(() => {
        notificationRegister.classList.remove('slide-in');
    }, 4000);

    setTimeout(displayNotification, getRandomNumberFromRange(8000, 15000));
}
