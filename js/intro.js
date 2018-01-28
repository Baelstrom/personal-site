// animation coding based on fininte-state-engine model

// first define the states.
// define start state and end state.


// States Identified
// State 1 : setSceneToBlack
// State 2 : showFirstGreeting
// State 3 : showSecondGreeting
// State 4 : showThirdGreeting
// state 5 : showWebsite
console.log('Ready for Takeoff.')

let state;

// --- DECLARATION OF STATES ---
function changeState ( state ) {
  switch ( state ) {
    case 'initialize':{
      state = 'initialize'
      initialize()
      break
    }
   case 'showFirstGreeting':{
     state = 'showFirstGreeting'
     showFirstGreeting()
      break
    }
   case 'showSecondGreeting':{
     state = 'showSecondGreeting'
     showSecondGreeting()
      break
    }
   case 'showThirdGreeting':{
     state = 'showThirdGreeting'
     showThirdGreeting()
     break
    }
   case 'showWebsite':{
      state = 'showWebsite'
      showWebsite()
      break
    }
  }
}

// --- DEFINITION OF STATES ---
function initialize() {
   addClass("initialize", "greetingsContainer")

  //update state
  changeState("showFirstGreeting")
}

function showFirstGreeting() {
  // show,hide then remove "hi there" text
  setTimeout(()=>{
    console.log("Plog: animation - " + "showGreeting" + " delayed by" + 2500 +"ms" )
    addClass("showGreeting", "greetingOne")
  }, 2500)

  setTimeout(()=>{
    console.log("Plog: animation - " + "hideGreeting" + " delayed by" + 4000 +"ms" )
    addClass("hideGreeting", "greetingOne")
  }, 4000)
    addClass("greetingsFalseBG", "body")
  setTimeout(()=>{
    console.log("Plog: animation - " + "removeGreeting" + " delayed by" + 4000 +"ms" )
    addClass("removeGreeting", "greetingOne")

    // update state
    changeState("showSecondGreeting")
  }, 5000)

}

function showSecondGreeting() {
  // add,show,hide then remove "hi there" text
    addClass("addGreeting", "greetingTwo")

  setTimeout(()=>{
    console.log("Plog: animation - " + "showGreeting" + " delayed by" + 2500 +"ms" )
    addClass("showGreeting", "greetingTwo")
  }, 300)

  setTimeout(()=>{
    console.log("Plog: animation - " + "hideGreeting" + " delayed by" + 4000 +"ms" )
    addClass("hideGreeting", "greetingTwo")
  }, 2400)

  setTimeout(()=>{
    console.log("Plog: animation - " + "removeGreeting" + " delayed by" + 4000 +"ms" )
    addClass("removeGreeting", "greetingTwo")
    addClass("removeGreeting", "greetingsContainer")
    // update state
    // changeState("showThirdGreeting")
    changeState("showWebsite")
  }, 4000)

}

function showWebsite() {
  addClass('showWebsite','contentContainer')
}


// --- SETTING THE MACHINE IN MOTION ---
changeState("initialize")


// --- HELPER FUNCTIONS ---

// Abstracted add class function
function addClass (targetClass, targetDiv) {
  var element = document.getElementsByClassName(targetDiv)
  console.log("element is, ", element)
  element[0].classList.add(targetClass)
}

// Abstracted animation delay function
function animDelay( animation, milliseconds, funct ) {
  setTimeout(()=>{
    console.log("Plog: animation - " + animation + " delayed by" + milliseconds +"ms" )
    funct;
  }, milliseconds)
}
//


// Glitch Effect Text Rotation
var glitch = document.getElementsByClassName('textContainer')[0]
console.log('classname of glitch',glitch)
let iterate = 0


setInterval(updateText, 4000)

function updateText() {
  if ( iterate < 5 ) {
    iterate++
  } else {
    iterate = 0
  }

  console.log(iterate)
  let innerText
  switch (iterate) {
    case 0 : {
      innerText = 'draw'
      break
    }
    case 1 : {
      innerText = 'learn'
      break
    }
    case 2 : {
      innerText = 'create'
      break
    }
    case 3 : {
      innerText = 'design'
      break
    }
    case 4 : {
      innerText = 'write'
      break
    }
    default: {
      innerText = 'code'
    }
  }
  glitch.setAttribute('data-text',innerText)
  glitch.innerHTML = innerText
}



// Background Image hover

let hoverElement = '';

function onHover(element){
	console.log('firing onHover')
	hoverElement = element.id+'Img'
}

function offHover ( element ){
console.log('firing offHover')
	hoverElement = ''
}

let imgData = [
  {
    name: 'maldivesImg',
    opacity: 0,
  },
  {
    name: 'plymouthImg',
    opacity: 0,
  },
];


setInterval ( checkHover, 50 )


function checkHover() {
	// logic for this function is :
  // iterate through all the images and check if the hovered element is equal to the image name
  // if yes then increase opacity while opacity < 1
  // if no then decrease opacity while opacity > 0
	console.log('firing checkHover')
	imgData.forEach(img => {

  if ( hoverElement === img.name && img.opacity < 1) {
    img.opacity += 0.1
    document.getElementById(img.name).setAttribute('style', 'opacity:'+ img.opacity)
    console.log('opacity is :  ', img.opacity )
  } else if ( hoverElement !== img.name && img.opacity > 0 ) {
    img.opacity -= 0.1
    document.getElementById(img.name).setAttribute('style', 'opacity:'+ img.opacity)
    console.log('opacity is :  ', img.opacity )
  }

})
}
