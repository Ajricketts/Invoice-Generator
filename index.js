const services = {
    "Wash Car": "$10",
    "Mow Lawn": "$20",
    "Pull Weeds": "$30"
}

const washBtn = document.getElementsByClassName("btn")[0]
const mowBtn = document.getElementsByClassName("btn")[1]
const pullBtn = document.getElementsByClassName("btn")[2]
const taskDiv = document.getElementsByClassName("task")[0]
const totalDiv = document.getElementsByClassName("total")[0]
let washAdded = false
let mowAdded = false
let pullAdded = false

washBtn.addEventListener("click", function(){
    if (!washAdded) {
        addTask(Object.keys(services)[0]) 
        washAdded = true
    }
})

mowBtn.addEventListener("click", function(){
    if (!mowAdded) {
        addTask(Object.keys(services)[1]) 
        mowAdded = true
    }
})

pullBtn.addEventListener("click", function(){
    if (!pullAdded) {
        addTask(Object.keys(services)[2]) 
        pullAdded = true
    }
})

function addTask(key) {
    taskDiv.innerHTML += `
        <div class="desc">
            <p>${key}</p>
            <button class="remove">Remove</button>
        </div>
    `
    totalDiv.innerHTML += `
        <p class="price">${services[key]}</p>
    `
}

function removeTask(parent) {
    
}