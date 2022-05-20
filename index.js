// Dictionary of all the services and their prices
const services = {
    "Wash Car": "$10",
    "Mow Lawn": "$20",
    "Pull Weeds": "$30"
}

// DOM interaction, grabbing all the elements needed
const washBtn = document.getElementsByClassName("btn")[0]
const mowBtn = document.getElementsByClassName("btn")[1]
const pullBtn = document.getElementsByClassName("btn")[2]
const taskDiv = document.getElementsByClassName("task")[0]
const totalDiv = document.getElementsByClassName("total")[0]
const sendBtn = document.getElementsByClassName("send-inv")[0]

// Boolean values to track whether a given service has been added to the invoice already (dont want to add services twice)
let washAdded = false
let mowAdded = false
let pullAdded = false

// Render the Car Wash service in the invoice
washBtn.addEventListener("click", function(){
    if (!washAdded) {
        addTask(Object.keys(services)[0]) 
        washAdded = true
    }
})

// Render the Lawn Mowing service in the invoice
mowBtn.addEventListener("click", function(){
    if (!mowAdded) {
        addTask(Object.keys(services)[1]) 
        mowAdded = true
    }
})

// Render the Pulling Weeds service in the invoice
pullBtn.addEventListener("click", function(){
    if (!pullAdded) {
        addTask(Object.keys(services)[2]) 
        pullAdded = true
    }
})

// Open the users default mail client so they can send the invoice
// TODO add a formated invoice attatchment in the email
sendBtn.addEventListener("click", function(){
    window.open('mailto:test@example.com')
})

//Add the service to the invoice with a remove button and correct price
function addTask(key) {
    taskDiv.innerHTML += `
        <div class="desc">
            <p>${key}</p>
            <button class="remove" onclick="removeTask(this, '${key}')">Remove</button>
        </div>
    `
    totalDiv.innerHTML += `
        <p class="price" id="${key}">${services[key]}</p>
    `
}

// Remove the sercive from the invoice along with the price
function removeTask(elem, dictKey) {
    let parentDiv = elem.parentNode
    console.log(parentDiv)
    parentDiv.remove()
    document.getElementById(dictKey).remove()
    if (dictKey == "Wash Car") {
        washAdded = false
    }
    else if (dictKey =="Mow Lawn"){
        mowAdded = false
    }
    else {
        pullAdded = false
    }
}