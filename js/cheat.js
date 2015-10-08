var pressed = [],
    code = '103,111,97,116,115',
    logMessage = '';;

for(var x=0; x<20000; x++) {
  logMessage += 'TYPE GOATS! ';
}
console.log(logMessage);

window.onload = function() {
  document.addEventListener('keypress', goats);
};

function goats(event) {
  pressed.push(event.keyCode);
  if(pressed.toString().indexOf(code) >= 0) {
    document.removeEventListener('keypress', goats);
    window.location = 'https://twitter.com/tindergoats';
  }
}
