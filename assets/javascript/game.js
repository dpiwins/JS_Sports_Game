const resetbutton = document.querySelector ('#reset-button')
const numresets = document.querySelector ('#num-resets')
const teamonebutton = document.querySelector ('#teamone-shoot-button')
const teamonegoals = document.querySelector ('#teamone-numgoals')
const teamoneshots = document.querySelector ('#teamone-numshots')
const teamtwobutton = document.querySelector ('#teamtwo-shoot-button')
const teamtwogoals = document.querySelector ('#teamtwo-numgoals')
const teamtwoshots = document.querySelector ('#teamtwo-numshots')

let t1shots = 0
let t1goals = 0
let t2shots = 0
let t2goals = 0
let resets = 0

teamonebutton.addEventListener('click', function() {

    let t1shots = Number(teamoneshots.innerHTML) + 1;
    teamoneshots.innerHTML = t1shots;
})

teamonebutton.addEventListener('click', function() {

    let randomize = Math.random()
    if (randomize <0.6) {
        teamonegoals.innerHTML = t1goals += 1
    }
        
    
})

teamtwobutton.addEventListener('click', function() {

    let t2shots = Number(teamtwoshots.innerHTML) + 1;
    teamtwoshots.innerHTML = t2shots;
})

teamtwobutton.addEventListener('click', function() {

    let randomize = Math.random()
    if (randomize <0.3) {
        teamtwogoals.innerHTML = t2goals += 1
    }
        
    
})

resetbutton.addEventListener('click', function() {
    teamoneshots.innerHTML = 0
    teamonegoals.innerHTML = 0
    teamtwoshots.innerHTML = 0
    teamtwogoals.innerHTML = 0
    
})

resetbutton.addEventListener('click', function () {
    let resets = Number(numresets.innerHTML) + 1;
    numresets.innerHTML = resets;
})