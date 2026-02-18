// well i'll let the second time touching me slide
// wait
// that was bad phrasing, gosh kill me now
function image_toggle() {
  let img_tag = String(document.getElementById("image").innerHTML);
  if (img_tag.includes("hidden")) {
    document.getElementById("image").innerHTML = "\n  <img src=\"cat.jpg\" width=\"255\" height=\"255\" style=\"display: block; margin: auto;\">\n";
  }
  else {
    document.getElementById("image").innerHTML = "\n  <img src=\"cat.jpg\" width=\"255\" height=\"255\" style=\"display: block; margin: auto; visibility: hidden;\">\n";
  }
}
function you_got_mail() {
  let audio = new Audio("youve-got-mail.mp3");
  audio.play();
}
function mail_anchor() {
  document.getElementById("mail").addEventListener("click", you_got_mail());
}
