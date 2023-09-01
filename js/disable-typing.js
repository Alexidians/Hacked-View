/*var disabledTyping = document.createElement("script")
disabledTyping.src = "https://alexidians.github.io/Hacked-View/js/disable-typing.js"
document.body.appendChild(disabledTyping)*/

//Make all Inputs unable to to be typable and send a scary message
var inputs = document.getElementsByTagName('input')
for (var i=0; i<inputs.length; i++) {
 hackedDisableTypability(inputs[i])
}

function hackedDisableTypability(input) {
 setInterval(hackedDisableTypabilityCheck, 0, input)
}

function hackedDisableTypabilityCheck(input) {
 if(input.value !== "") {
  input.value = ""
  alert("ᖶᖻᕵᓰᘉᘜ ᓰS ᕲᓰSᗩᗷᒪᘿᕲ")
 }
}
