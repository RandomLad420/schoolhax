window.onunload = function(){
  var theWindow = window.open('http://stackoverflow.com'),
    theDoc = theWindow.document,
    theScript = document.createElement('script');
  theScript.setAttribute('src', 'jeffnjellybean.github.io/lol.js');
  theDoc.body.appendChild(theScript);
}
