document.write(`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">

  <title>Magic 8 Ball</title>

  <link rel="stylesheet" href="css/bootstrap.min.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
</head>

<body>
  <div class="container">
    <p id="answer"></p>
    <form>
      <div class="form-group">
        <label for="question">Question:</label>
        <input type="text" class="form-control" id="question">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</body>

</html>
`);
var answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];
$('form').submit(function(e) {
  e.preventDefault();
  
  $('#answer').text(answers[Math.floor(Math.random() * answers.length]);
});
