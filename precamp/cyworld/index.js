const home = () => {
    document.getElementById("contentFrame").setAttribute("src","home.html")
    document.getElementById("home").style = "color: black; background-color: white;"
    document.getElementById("jukebox").style = "color: white; background-color: #298eb5;"
    document.getElementById("game").style = "color: white; background-color: #298eb5;"
}
const jukebox = () => {
    document.getElementById("contentFrame").setAttribute("src","jukebox.html")
    document.getElementById("jukebox").style = "color: black; background-color: white;"
    document.getElementById("home").style = "color: white; background-color: #298eb5;"
    document.getElementById("game").style = "color: white; background-color: #298eb5;"
}
const game = () => {
    document.getElementById("contentFrame").setAttribute("src","game.html")
    document.getElementById("game").style = "color: black; background-color: white;"
    document.getElementById("jukebox").style = "color: white; background-color: #298eb5;"
    document.getElementById("home").style = "color: white; background-color: #298eb5;"
}