human= h

getCard = a

computer = b

restart = c

function run() {
    getCard()
}

function compturn() {
    computer
}

function getCard() {
    var r = Math.floor(Math.random() * 10) +1
    // document.getElementById("card").innerHTML = "<image src=images/" + r + "C.jpg>"
    var suitArray = ["C", "D", "H", "S", "A"]
    var randomSuit = Math.floor(Math.random() * 4) // 0 to 3
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
}

// if(document.getElementById('STOP').clicked == true) {
//     alert("computer")

// }


function computurn() {
    alert("computer")
    var r = Math.floor(Math.random() * 10) +1
    // document.getElementById("card").innerHTML = "<image src=images/" + r + "C.jpg>"
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4) // 0 to 3
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
}
