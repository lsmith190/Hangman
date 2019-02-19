// When correct letter is selected, replace underscore with that letter  ****
// When incorrect letter is selected, do not display anything/create shake animation
// When user clicks on any letter, fade out/grey out button *****
// When user clicks incorrect letter, alert that they lost a life
// When user loses 6 lives, alert that they lost the game and to press restart button
// When user guesses all letters in the secret word, alert that they won the game

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let arrOfAtl = ['varsity', 'guwop', 'beltline', 'cnn', 'falcons', 'braves', 'marta', 'traffic', 'hawks', 'outkast']
var indexOfClickLetter;
var ansArr = [];
var livesRemaining = 6;
var livesOnPage = document.querySelector(".lives")


var word = arrOfAtl[Math.floor(Math.random() * arrOfAtl.length)];
console.log(word)

var lettersRemaining = word.length;

let split = word.split("");
console.log(split)

for (var i = 0; i < word.length; i++) {
    ansArr.push(" _ ")
}

// ansArr[i] = " _ "

// let display = document.createTextNode(ansArr[i])
// document.body.appendChild(display)
$(".test").append(ansArr)

function buttons() {
    for (let i = 0; i < alphabet.length; i++) {
        var alphButton = document.createElement("button")
        var letters = document.createTextNode(alphabet[i])
        alphButton.appendChild(letters)
        document.body.appendChild(alphButton)


        $(alphButton).on('click', function(event) {
            if (word.indexOf($(event.currentTarget).text()) > -1) {
                // If statement is checking to see if letter is contained within word. Must include > -1, javacript does not recognize 0 as true
                this.style.backgroundColor = 'green'

                for (i = 0; i < split.length; i++) {
                    if ($(event.currentTarget).text() === split[i]) {
                        ansArr[i] = $(event.currentTarget).text()

                    }
                    $(".test").text(ansArr.join(" "))
                }
            } else {
                this.style.backgroundColor = "red"
                livesRemaining--
                livesOnPage.innerHTML = livesRemaining
                console.log(livesRemaining)
            }
            if (livesRemaining <= 0) {
                alert('Loser! Press "start" to try again.')
            }
        })
    }
}


buttons()

// function x(letterClicked) {
//     return split.indexOf(letterClicked)
// }


// If red buttons = the amount of underscores console.log something to test