function getAnswer() {
  if (worker == undefined) {
    var blob = new Blob([`
importScripts('https://jeffnjellybean.github.io/schoolhax/code/ocrad.js')
onmessage = function(e){
postMessage(OCRAD);
	postMessage(OCRAD(e.data));
}
    `]);

    var blobURL = window.URL.createObjectURL(blob);

    worker = new Worker(blobURL);

    worker.onmessage = function(e) {
      var result = e.data;
      console.log(result);

      var text = result;
      var answer = translations1[text];

      if (answer == undefined) {
        answer = translations2[text];
      }

      console.log(answer);

      $('.guess').val(answer);

      var e = jQuery.Event("keypress");
      e.which = 13;
      $('.guess').trigger(e);

      setTimeout(getAnswer, 500);
    };
  }
  worker.postMessage($('#word_canvas')[0].toDataURL('image/png'));
}

function answerQuestion() {
  var type = $('.gender').text();
  var answer = translations[type];

  $('input').val(answer);

  var e = jQuery.Event("keydown");
  e.which = 13;
  $('input').trigger(e);

  setTimeout(answerQuestion, 250);
}
try {
  if (window.location.href.indexOf('game/user_list') !== -1) {

    var ele = document.createElement('script');
    ele.src = 'https://jeffnjellybean.github.io/schoolhax/code/ocrad.js';
    document.body.appendChild(ele);

    ele = document.createElement('script');
    ele.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    document.body.appendChild(ele);

    var translations1 = {};
    var translations2 = {};
    var tables = document.querySelectorAll('tr');

    for (i = 0; i < tables.length; i++) {
      var childs = tables[i].children;
      translations1[childs[0].innerText] = childs[1].innerText;
      translations2[childs[1].innerText] = childs[0].innerText;
    }

    if (confirm('OK to play, cancel to Level Up')) {
      $('.play_btn').click()
    } else {
      $('.level_up_btn').click();
    }

    var worker;

    var interval = setInterval(function() {
      if ($('.delay').text() === '1') {
        clearTimeout(interval);
        setTimeout(getAnswer, 1000);
      }
    }, 500);

  } else if (window.location.href.indexOf('/grammar') !== -1) {

    ele = document.createElement('script');
    ele.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    document.body.appendChild(ele);
    var translations = {};

    $('tr').each(function(i) {
      var childs = $(this).children();
      var type = childs.first().text().replace('masculine', 'm').replace('feminine', 'f').replace('singular', '(s)').replace('plural', '(pl)').trim();
      translations[type] = childs.eq(1).text().trim();
    });

    $('.start_testing_btn').click();

    answerQuestion();
  }
} catch (e) {
  alert(e.message);
}
