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

var remainingLetters = word.length;

let split = word.split("");
console.log(split)

for (var i = 0; i < word.length; i++) {
    ansArr.push(" _ ")
}


$(".test").append(ansArr)


function buttons() {
    for (let i = 0; i < alphabet.length; i++) {
        var alphButton = document.createElement("button")
        alphButton.classList.add("alphButtons")
        var letters = document.createTextNode(alphabet[i])
        alphButton.appendChild(letters)
        document.body.appendChild(alphButton)
        $(alphButton).addClass("disable")


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
            }

            if (livesRemaining <= 0) {
                alert('Loser! Press "start" to try again.')
                $(".disable").attr("disabled", true)
            }

            // Counting number of underscores remaining in random word
            spaceCounter = 0;
            for (var i = 0; i < ansArr.length; i++) {
                if (ansArr[i] == ' _ ') {
                    spaceCounter++;
                }
            }
            console.log("spaceCounter " + spaceCounter);

            if (spaceCounter <= 0) {
                alert("You won!")
                $(".disable").attr("disabled", true)
            }

        })
    }
}


buttons()