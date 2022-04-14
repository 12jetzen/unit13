function run() {
    getCard()
}

function getCard() {
    var r = Math.floor(Math.random() * 10) +1
    document.getElementById("card").innerHTML = "<image src=images/" + r + "C.jpg>"
}

function getCard() {
    var r = Math.floor(Math.random() * 10) +1
    document.getElementById("card").innerHTML = "<image src=images/" + r + "D.jpg>"
}