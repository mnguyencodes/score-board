// https://www.figma.com/design/YC48MCx4frBFtYoz6rNJE6/Basketball-Scoreboard?node-id=107-158&t=nkHA4xCiYG7bY6kZ-0

let home = 0
let guest = 0

let homeScoreEl = document.getElementById("homescore")
let guestScoreEl = document.getElementById("guestscore")

homeScoreEl.textContent = home
guestScoreEl.textContent = guest

function incrementHome() {
    home += 1
    homeScoreEl.textContent = home
}

function incrementHome2() {
    home += 2
    homeScoreEl.textContent = home
}

function incrementHome3() {
    home += 3
    homeScoreEl.textContent = home
}

function incrementGuest() {
    guest += 1
    guestScoreEl.textContent = guest
}

function incrementGuest2() {
    guest += 2
    guestScoreEl.textContent = guest
}

function incrementGuest3() {
    guest += 3
    guestScoreEl.textContent = guest
}