const addToElementClassListIfNotContains = require('../helpers/addToElementClassListIfNotContains');
const removeClassFromElementIfContains = require('../helpers/removeClassFromElementIfContains');
const modalsOverlays = document.getElementsByClassName('component-modal');
const scrollbarWidth = require('../services/scrollbar/getScrollbarWidth')();

const MODAL_OVERLAY_X_PADDING = 15;

controlModalJustifyContent();
addEventListener('resize', controlModalJustifyContent);

function controlModalJustifyContent() {
    for (let i = 0; i < modalsOverlays.length; i++) {
        // 40 pixels of .modal-component padding
        if (modalsOverlays[i].firstElementChild.getBoundingClientRect().height < innerHeight - 40) {
            addToElementClassListIfNotContains(modalsOverlays[i], 'align-items-center');
        } else {
            removeClassFromElementIfContains(modalsOverlays[i], 'align-items-center');
        }
    }
}

window.openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = scrollbarWidth + 'px';
    modal.style.opacity = '1';
    modal.style.visibility = 'unset';
};

window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.opacity = '0';
    // 15 pixels is default modal overlay padding - better look on mobile
    modal.style.paddingLeft = scrollbarWidth + MODAL_OVERLAY_X_PADDING + 'px';
    document.body.style.overflow = 'unset';
    document.body.style.marginRight = '0';

    setTimeout(() => {
        modal.style.paddingLeft = `${MODAL_OVERLAY_X_PADDING}px`;
        modal.style.visibility = 'hidden';
    }, 300);
};

// control closing modals when clicking in overlay
for (let i = 0; i < modalsOverlays.length; i++) {
    modalsOverlays[i].onclick = (e) => {
        if (e.target === modalsOverlays[i]) {
            closeModal(e.target.id);
        }
    };
}
