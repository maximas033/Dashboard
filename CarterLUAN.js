function TalkToLuan(text) {
  const data = {
    text: text,
    key: "79339706-c7de-4a2c-a704-3023fb98778d",
    playerId: "LUAN_1",
  };

  fetch("https://api.carterlabs.ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Input:", data.input);
      console.log("Output Text:", data.output.text);
      document.getElementById("LuanTalkBack").innerHTML = data.output.text;
      // speak the text
      const voices = speechSynthesis.getVoices();
      const voice = voices[0];
      const utterance = new SpeechSynthesisUtterance(data.output.text);
      utterance.voice = voice;
      // voice rate slower
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
      setTimeout(() => {
        document.getElementById("LuanTalkBack").innerHTML = "";
      }, 9000);

      data.forced_behaviours.forEach((fb) => {
        console.log("Forced Behaviour:", fb.name);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

var buttonToTalk = document.getElementById("ButtonToTalk");

if (window.SpeechRecognition || window.webkitSpeechRecognition) {
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  function startRecognition() {
    recognition.start();
    document.getElementById("ButtonToTalk").style.background =
      "rgba(1, 90, 153, 0.503)";
  }

  function stopRecognition() {
    recognition.stop();
    document.getElementById("ButtonToTalk").style.background =
      "rgba(1, 90, 153, 0)";
  }

  // Mouse events
  buttonToTalk.addEventListener("mousedown", startRecognition);
  buttonToTalk.addEventListener("mouseup", stopRecognition);

  // Touch events
  buttonToTalk.addEventListener("touchstart", function (event) {
    event.preventDefault(); // Prevents mouse events from firing
    startRecognition();
  });
  buttonToTalk.addEventListener("touchend", function (event) {
    event.preventDefault(); // Prevents mouse events from firing
    stopRecognition();
  });

  recognition.addEventListener("result", function (event) {
    var spokenText = event.results[0][0].transcript;
    TalkToLuan(spokenText);
  });

  recognition.addEventListener("error", function (event) {
    console.error(event.error);
  });
} else {
  console.error("SpeechRecognition is not supported by your browser.");
}
