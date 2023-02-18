const speakButton = document.getElementById('speak');
const textInput = document.getElementById('text');

// check if the Web Speech API is available
if ('speechSynthesis' in window) {
  const synth = window.speechSynthesis;

  const speakText = () => {
    // create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(textInput.value);

    // set the voice
    const voice = synth.getVoices()[0]; // change to desired voice
    utterance.voice = voice;

    // speak the text
    synth.speak(utterance);
  }

  speakButton.addEventListener('click', speakText);
} else {
  console.log('Web Speech API is not supported');
}
