const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const session = require ('express-session')
const bodyparser = require ('body-parser')


const fs = require('fs')
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");





app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'static')))
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {secure:true},
}))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))


// app.get("/", function(req, res, next){      // user visits page
//   if (req.session.currentGame === true){  // if user is in current game, resume current game >> how to store sessionid data??
//     res.redirect("./game") // display gameplay
//   } else {  
//     res.render ("game")                // if user is NOT in current game, random word is generated  >>> how to generate random id??
//   }
// })

app.get ("/", function(req, res, next){
  req.session.randomWord = getrandomWord()
  req.session.incorrect = []
  req.session.display = getWordDisplay(req.session.randomWord)
  res.render("game", {"letters": req.session.display})
  // callback current game >> callback game from stored session data ^^
})

function getrandomWord(){
  var randomWord = words[Math.floor(Math.random() * words.length)]
  console.log(randomWord)
  return randomWord
}

function getWordDisplay(word){

}

app.post ("/", function(req, res, next){ 
    // post for forms. POST request is when submit button is pressed. POST will decipher whether the guessed letter is correct/incorrect
 
     //if (req.body.)
})

app.listen(3000, function(){
  console.log("App running on port 3000")
})


// 

///home page - no session
// create session
// generate word //
//length of word and blank spaces "underscores" //
// app.post - form info into game logic
// pass letter into game function
// 