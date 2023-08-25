window.onload = function () {
  var sumarInput = document.getElementById("sumarInput");
  var restarInput = document.getElementById("restarInput");
  var dadesDiv = document.getElementById("dades");

  var emojis = ["😀", "😄", "😊", "👍", "❤️", "🎉", "🐶", "🍕", "🌈", "⚡️"];

  function getRandomEmoji() {
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }

  function updateEmojis() {
    var emojiArray = [];
    var valorActual = parseInt(sumarInput.value);

    for (var i = 0; i < valorActual; i++) {
      var emoji = getRandomEmoji();
      emojiArray.push(emoji);
    }

    dadesDiv.innerHTML = "[" + emojiArray.join(", ") + "]";
  }

  document.getElementById("sumarButton").onclick = function () {
    var valorActual = parseInt(sumarInput.value);
    sumarInput.value = valorActual + 1;
    updateEmojis();
  };

  document.getElementById("unshiftButton").onclick = function () {
    var valorActual = parseInt(sumarInput.value);
    sumarInput.value = valorActual + 1;
    updateEmojis();
  };

  document.getElementById("insertButton").onclick = function () {
    var valorActual = parseInt(sumarInput.value);
    sumarInput.value = valorActual + 1;
    updateEmojis();
  };

  document.getElementById("popButton").onclick = function () {
    var valorActual = parseInt(sumarInput.value);
    if (valorActual > 0) {
      sumarInput.value = valorActual - 1;
      updateEmojis();
    }
  };

  document.getElementById("shiftButton").onclick = function () {
    var valorActual = parseInt(sumarInput.value);
    if (valorActual > 0) {
      sumarInput.value = valorActual - 1;
      updateEmojis();
    }
  };

  document.getElementById("removeButton").onclick = function () {
    var valorActual = parseInt(restarInput.value);
    var index = parseInt(restarInput.value);
    var currentEmojis = dadesDiv.innerHTML;
    if (index >= 0 && index < valorActual) {
      restarInput.value = valorActual - 1;
      updateEmojis();
    }
  };
};
