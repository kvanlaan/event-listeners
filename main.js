// GO!
//task#1

// when student button is clicked, make bmo disappear

var buttonContainer = document.querySelector("div .answer-box")

var button = document.createElement("button") 
	button.textContent = "nav-menu"


buttonContainer.appendChild(button)



button.style.padding = "13px"




var navBeGoneButton = document.querySelector("button")
var navMenu = buttonContainer.querySelector(".nav-menu")

var navState = {
  showing: true,
}

var toggleNav = function() {
  if (navState.showing) {
    navMenu.style.opacity = 0
    navState.showing = false
  }
  else {
    navMenu.style.opacity = 1
    navState.showing = true
  }
}

navBeGoneButton.addEventListener("click", toggleNav)


///task#2

var container = document.querySelector('#add-guest')
var inputContainer = container.querySelector('.answer-box')
var inputBox = document.createElement('input') 
inputContainer.appendChild(inputBox)

inputContainer.style.position = "relative"
inputBox.style.position = "absolute"
inputBox.style.top = "0px"
inputBox.style.left = "270px"

var inputEl = inputBox


var itemsList = document.querySelector(' .guest-list')

var addItem = function(keyEvent) {
  inputEl = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {
      var userInput = inputEl.value
      var newLi = document.createElement('li')
      newLi.className += " guest"
      newLi.textContent = userInput
      itemsList.appendChild(newLi)
  }
  
var isEven = function(num) {  
  if(num % 2 == 0)
{
  return true
}
else
{
  return false
}
}
  
  
for (i = 1; i < itemsList.length; i++)  {
  newLi =  itemsList[i]
  if (isEven(i)) {
  newLi.style.background = "tomato"
}
}  
}  
inputEl.addEventListener('keydown',addItem)


///task#3

///task#2

var container = document.querySelector('#add-guest')
var inputContainer = container.querySelector('.answer-box')
var inputBox = document.createElement('input') 
inputContainer.appendChild(inputBox)

inputContainer.style.position = "relative"
inputBox.style.position = "absolute"
inputBox.style.top = "0px"
inputBox.style.left = "270px"

var inputEl = inputBox


var itemsList = document.querySelector(' .guest-list')

var addItem = function(keyEvent) {
  inputEl = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {
      var userInput = inputEl.value
      var newLi = document.createElement('li')
      newLi.className += " guest"
      newLi.textContent = userInput
      itemsList.appendChild(newLi)
  }
  

var xButton = document.createElement('button') 
xButton.textContent = "X"
xButton.style.width = "2%"
xButton.style.height = ".05%"
xButton.style.font = "medium"


newLi.appendChild(xButton)

xButton.style.background = "red"

var removeItem = function() {
   itemsList.removeChild(newLi)
  }



var isEven = function(num) {  
  if(num % 2 == 0)
{
  return true
}
else
{
  return false
}
}
  
  
for (i = 1; i < itemsList.length; i++)  {
  newLi =  itemsList[i]
  if (isEven(i)) {
  newLi.style.background = "tomato"
}
} 

xButton.addEventListener('click',removeItem)

}  
inputEl.addEventListener('keydown',addItem)







