var heading = document.getElementById("heading");
var i = 0;
var txt = "Anaf Ibn Karim";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    if (heading.innerHTML.charAt(heading.innerHTML.length - 1) == "|") {
        heading.innerHTML = heading.innerHTML.substring(0, heading.innerHTML.length - 1);
      }

    heading.innerHTML += txt.charAt(i);
    if (i == 7) {
      heading.innerHTML += "<br>";
    }
    i++;
    heading.innerHTML += "|";
    setTimeout(typeWriter, speed);
  } else {
    heading.innerHTML = heading.innerHTML.substring(0,heading.innerHTML.length-1);
  }

  
}


typeWriter();

function copyDiscordUsername() {
  let DiscordUsername = "NextProgram#8535"
  navigator.clipboard.writeText(DiscordUsername);
  // Alert the copied text
  //show popup
}