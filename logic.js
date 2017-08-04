
let split = randomWord.split('')
var incorrect = []
let display = []

for (let i=0; i<randomWord.length; i++){
    display.push ("_")
}
//Random word generator - finds word, splits letters into an array. 
function checkLetter(guess) { 
    console.log('random word', randomWord)
    // console.log (randomWord.length)
    let isCorrect = false
    split.forEach(function(letter,i){
        if (letter === guess){
            isCorrect = true
            display[i] = letter
        }
    })
    if (!isCorrect) {
        incorrect.push (guess)
    }
    // console.log('incorrect array', incorrect)

    return correctDisplay
}


// checkLetter('a')      /// pass letter into function to determine if letter is correct/incorrect
// console.log (correctDisplay)

module.exports = {
    checkLetter : checkLetter
}