

function stringOS() {
  let OSName = "unknown";
  let userOS = navigator.userAgent.toLowerCase();
  let mainUserLang = navigator.languages[0];
  let secondUserLang = navigator.languages[1];
  let keyboardLayout = navigator.keyboard.getLayoutMap();
  switch (true) {
    case (userOS.indexOf("win") != -1):
      OSName = "Windows";
      break;
    case (userOS.indexOf("mac") != -1):
      OSName = "Apple";
      break;
    case (userOS.indexOf("linux") != -1):
      OSName = "Linux";
      break;
    case (userOS.indexOf("x11") != -1):
      OSName = "Unix";
     break;          
  } 
  return `${OSName} ${mainUserLang} ${secondUserLang}`;
}

export { stringOS }