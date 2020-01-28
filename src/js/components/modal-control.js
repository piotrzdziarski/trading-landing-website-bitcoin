const addToElementClassListIfNotContains = require('../helpers/addToElementClassListIfNotContains');
const removeClassFromElementIfContains = require('../helpers/removeClassFromElementIfContains');
const modals = document.getElementsByClassName('component-modal');

controlModalJustifyContent();
addEventListener('resize', controlModalJustifyContent);

function controlModalJustifyContent() {
    for (let i = 0; i < modals.length; i++) {
        // 40 pixels of .modal-component padding
        if (modals[i].firstElementChild.getBoundingClientRect().height < innerHeight - 40) {
            addToElementClassListIfNotContains(modals[i], 'align-items-center');
        } else {
            removeClassFromElementIfContains(modals[i], 'align-items-center');
        }
    }
}
