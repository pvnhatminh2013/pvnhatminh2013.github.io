// look who finally decided it's time for js
// do ya even know when to type words on me
// huh? f*cking son of a faggot's wanker's ballox's bitch
function image_toggle() {
  let img_tag = String(document.getElementById("image").innerHTML);
  if (img_tag.includes("hidden")) {
    document.getElementNyId("image") = "\n  <img src=\"cat.jpg\" width=\"255\" height=\"255\" style=\"display: block; margin: auto;\">\n";
  }
  else {
    document.getElementById("image") = "\n  <img src=\"cat.jpg\" width=\"255\" height=\"255\" style=\"display: block; margin: auto; visibility: hidden;\">\n";
  }
}
