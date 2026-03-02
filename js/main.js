// main.js – reserved for future shared scripts
document.addEventListener('DOMContentLoaded', function () {
  function attachSimpleMessage(formId, msgId, text) {
    var form = document.getElementById(formId);
    var msg = document.getElementById(msgId);
    if (!form || !msg) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.textContent = text;
      msg.style.color = '#145c32';
    });
  }

  attachSimpleMessage(
    'volunteer-form',
    'volunteer-msg',
    'Thank you! We have received your interest. Our team will contact you for upcoming activities.'
  );
  attachSimpleMessage(
    'partner-form',
    'partner-msg',
    'Thank you for your interest in partnering with us. We will get in touch soon.'
  );
  attachSimpleMessage(
    'support-form',
    'support-msg',
    'Thank you for your support interest. We will follow up with details.'
  );
  attachSimpleMessage(
    'story-form',
    'story-msg',
    'Thank you for sharing your story. We will review it before featuring it in the gallery.'
  );
});
