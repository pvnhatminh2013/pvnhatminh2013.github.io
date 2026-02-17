// well i'll let the second time touching me slide
// wait
// that was badphrasing, gosh kill me now
function image_toggle() {
  let img_tag = String(document.getElementById("image").innerHTML);
  if (img_tag.includes("hidden")) {
    document.getElementById("image").innerHTML = "\n  <img src=\"cat.jpg\" width=\"255\" height=\"255\" style=\"display: block; margin: auto;\">\n";
  }
  else {
    document.getElementById("image").innerHTML = "\n  <img src=\"cat.jpg\" width=\"255\" height=\"255\" style=\"display: block; margin: auto; visibility: hidden;\">\n";
  }
}
function play_audio(audio_file) {
  audio_file.play();
}
