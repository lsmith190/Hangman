// When correct letter is selected, replace underscore with that letter
// When incorrect letter is selected, do not display anything/create shake animation
// When user clicks on any letter, fade out/grey out button
// When user clicks incorrect letter, alert that they lost a life
// When user loses 6 lives, alert that they lost the game and to press restart button
// When user guesses all letters in the secret word, alert that they won the game

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function buttons() {

}
for (let i = 0; i < alphabet.length; i++) {}

function printBtn() {
    for (var i = 0; i < listBrand.length; i++) {
        var btn = document.createElement("button");
        var t = document.createTextNode(listBrand[i]);
        btn.appendChild(t);
        document.body.appendChild(btn);
    }
}

printBtn();