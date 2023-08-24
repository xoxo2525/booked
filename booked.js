function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

document.getElementById('reservation').style.display = 'block';
document.getElementsByClassName('tab')[0].classList.add('active');

function showCurrent() {
    document.getElementById('current').style.display = 'block';
    document.getElementById('past').style.display = 'none';
}

function showPast() {
    document.getElementById('past').style.display = 'block';
    document.getElementById('current').style.display = 'none';
}

function toLetReservedLook() {
    const hiddenid = document.getElementById('hiddenid');
    hiddenid.classList.toggle('hidden');
}