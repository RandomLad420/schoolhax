function getAnswer() {
  try {
    if(worker == undefined) {
      worker = new Tesseract.TesseractWorker();
    }
    worker.recognize($('#word_canvas')[0].toDataURL('image/png'), 'eng').then(function(result) {
      alert(result);

      var text = result;
      var answer = translations1[text];

      if (answer == undefined) {
        answer = translations2[text];
      }

      alert(answer);

      $('.guess').val(answer);

      var event = jQuery.Event('keypress');
      event.which = 13;
      $('.guess').trigger(event);

      setTimeout(getAnswer, 1000);
    });
  } catch (e) {
    alert(e.message);
  }
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
    ele.src = 'https://unpkg.com/tesseract.js@v2.0.0-alpha.13/dist/tesseract.min.js';
    document.body.appendChild(ele);

    ele = document.createElement('script');
    ele.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    document.body.appendChild(ele);

    var translations1 = {};
    var translations2 = {};
    var tables = document.querySelectorAll('tr');

    for (var i = 0; i < tables.length; i++) {
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

    var ele = document.createElement('script');
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
