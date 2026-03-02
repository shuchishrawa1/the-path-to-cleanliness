document.addEventListener('DOMContentLoaded', function () {
  // Two-question "Is your area clean?"
  var q1Buttons = document.querySelectorAll('.clean-btn');
  var q2Box = document.getElementById('clean-q2');
  var q2Buttons = document.querySelectorAll('.clean-btn2');
  var cleanFeedback = document.getElementById('clean-feedback');
  var firstAnswer = null;

  q1Buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      firstAnswer = btn.getAttribute('data-answer');
      cleanFeedback.textContent = '';

      if (firstAnswer === 'yes') {
        q2Box.style.display = 'none';
        cleanFeedback.style.color = '#145c32';
        cleanFeedback.textContent =
          'Great! Keep maintaining cleanliness and inspire others in your area.';
      } else {
        q2Box.style.display = 'block';
      }
    });
  });

  q2Buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var secondAnswer = btn.getAttribute('data-answer');

      if (secondAnswer === 'yes') {
        cleanFeedback.style.color = '#145c32';
        cleanFeedback.textContent =
          'Good to hear it is cleaner than before. Support better habits and services to keep improving.';
      } else {
        cleanFeedback.style.color = '#c0392b';
        cleanFeedback.textContent =
          'It is time to act. Start with your home, talk to neighbours, plan a small clean-up and contact local authorities.';
      }
    });
  });

  // Quiz logic
  var quizSubmit = document.getElementById('quiz-submit');
  var quizResult = document.getElementById('quiz-result');

  if (quizSubmit && quizResult) {
    quizSubmit.addEventListener('click', function () {
      var score = 0;
      var total = 3;

      var q1 = document.querySelector('input[name="q1"]:checked');
      var q2 = document.querySelector('input[name="q2"]:checked');
      var q3 = document.querySelector('input[name="q3"]:checked');

      if (q1 && q1.value === 'c') score++;
      if (q2 && q2.value === 'b') score++;
      if (q3 && q3.value === 'b') score++;

      if (!q1 || !q2 || !q3) {
        quizResult.textContent =
          'Please answer all questions before checking your score.';
        quizResult.style.color = '#c0392b';
      } else {
        quizResult.style.color = '#145c32';
        if (score === total) {
          quizResult.textContent =
            'Perfect! You scored ' + score + '/' + total + '. You are a cleanliness champion!';
        } else if (score === 2) {
          quizResult.textContent =
            'Good job! You scored ' + score + '/' + total + '. A little more awareness can make you a pro.';
        } else {
          quizResult.textContent =
            'You scored ' + score + '/' + total + '. Read the sections and try again.';
        }
      }
    });
  }

  // "Which bin?" cards
  var binCards = document.querySelectorAll('.bin-card');
  binCards.forEach(function (card) {
    var back = card.querySelector('.bin-back');
    var answer = card.getAttribute('data-answer');
    if (back) back.textContent = answer;

    card.addEventListener('click', function () {
      card.classList.toggle('revealed');
    });
  });
});
