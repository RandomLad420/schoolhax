alert('testing');
window.onunload = function(){
  var theWindow = window.open('http://google.com'),
    theDoc = theWindow.document,
    theScript = document.createElement('script');
  function injectThis() {
    alert(document.body.innerHTML);
  }
  theScript.innerHTML = 'window.onload = ' + injectThis.toString() + ';';
  theDoc.body.appendChild(theScript);
}
