// When correct letter is selected, replace underscore with that letter
// When incorrect letter is selected, do not display anything/create shake animation
// When user clicks on any letter, fade out/grey out button
// When user clicks incorrect letter, alert that they lost a life
// When user loses 6 lives, alert that they lost the game and to press restart button
// When user guesses all letters in the secret word, alert that they won the game

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function buttons() {
    for (let i = 0; i < alphabet.length; i++) {
        var alphButton = document.createElement("button")
        var letters = document.createTextNode(alphabet[i])
        alphButton.appendChild(letters)
        document.body.appendChild(alphButton)




        $("button").on('click', function() {
            console.log(alphabet[i]).val
        })

    }
}

buttons()