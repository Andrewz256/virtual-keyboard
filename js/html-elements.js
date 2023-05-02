import { stringOS } from "./get-os-information.js";

const layer1 = "1234567890";
const layer2 = {
                  us: "qwertyuiop",
                  ru : "йцукенгшщз" 
                };
const layer3 = {
                  us: "asdfghjkl",
                  ru: "фывапролд"
                }
const layer4 = {
                  us: "zxcvbnm",
                  ru: "ячсмить"
                }
const spaceBut = "Space";
const tabBut = "Tab";
const capsLockBut = "CapsLock";
const backspaceBut = "Backspace";
const shiftBut = "Shift";
const altBut = "Alt";
const ctrlBut = "Ctrl";
const enterBut = "Enter";
const specBut = "` ~";
const minusBut = "- __";
const plusBut = "+ =";
const rightBracketsBut = {
                            us: "]",
                            ru: "х"
                          } 
const leftBracketsBut = {
                            us: "[",
                            ru: "ъ"
                        } 
const stickLBut = "\\";
const deleteBut = "Del";
const colonBut = {
                    us: ": ;",
                    ru: "э"
                  }
const quotesBut = {
                    us: " ' ",
                    ru: "ж"
                  }
const commaBut = {
                    us: " , ",
                    ru: "б"
                  }
const dotBut = {
                  us: " . ",
                  ru: "ю"
                }           
const stickRBut = "/";
const winBut = "WIN";
const arrowUpBut = "&#8593";
const arrowDownBut = "&#8595";
const arrowRightBut = "&#8594";
const arrowLeftBut = "&#8592";







function createHeader() {
  const body = document.querySelector("body");
  const mainHeader = document.createElement("header");
  const mainH1Element = document.createElement("h1");
  const main = document.createElement("main");
  body.prepend(mainHeader);
  mainHeader.after(main);
  mainHeader.classList.add("header");
  main.classList.add("main");
  mainH1Element.classList.add("h1");
  mainHeader.appendChild(mainH1Element);
  mainH1Element.innerHTML =  "Virtual Keyboard for RSSchool";
}

function createTextArea() {
  const main = document.querySelector("main");
  const textArea = document.createElement ("div");
  const outputArea = document.createElement ("p");
  textArea.classList.add("text-area");
  outputArea.classList.add("output");
  outputArea.setAttribute("id", "output");
  outputArea.textContent =">";
  main.appendChild(textArea);
  textArea.appendChild(outputArea);
  
  
}
function createToggleBar() {
  const main = document.querySelector("main");
  const toggleBar = document.createElement("div");
  toggleBar.classList.add("toggle-bar");
  main.appendChild(toggleBar);
  //let OS = stringOS();
  //toggleBar.innerHTML = OS;
}

function createKeyboard() {
  const main = document.querySelector("main");
  const keyboard = document.createElement ("div");
  
  keyboard.classList.add("keyboard");
  main.appendChild(keyboard);
  
  function layerOne () {
    const layer = document.createElement("div");
    layer.classList.add("layer");
    addKey(specBut,"BACKQUOTE", layer);
    layer1.split("").forEach(key => {
     addKey(key,"DIGIT"+key.toUpperCase(), layer);
    });
    addKey(minusBut,"MINUS", layer);
    addKey(plusBut,"EQUAL", layer);
    addKey(backspaceBut,"BACKSPACE", layer);
    keyboard.appendChild(layer);
  }

  function layerTwo() {
    const layer = document.createElement("div");  
    layer.classList.add("layer");
    addKey(tabBut,"TAB", layer);
    layer2.us.split("").forEach(key => {
     addKey(key, "KEY"+key.toUpperCase(), layer);
    });
    addKey(leftBracketsBut.us,"BRACKETLEFT",layer);
    addKey(rightBracketsBut.us,"BRACKETRIGHT",layer);
    addKey(stickLBut,"BACKSLASH",layer);
    addKey(deleteBut,"DELETE",layer);
    keyboard.appendChild(layer);
  }
  function layerThree() {
    const layer = document.createElement("div");
    layer.classList.add("layer");
    addKey(capsLockBut,"CAPSLOCK", layer);
    layer3.us.split("").forEach(key => {
     addKey(key, "KEY"+key.toUpperCase(), layer);
    });
    addKey(colonBut.us,"SEMICOLON",layer);
    addKey(quotesBut.us,"QUOTE", layer);
    addKey(enterBut,"ENTER",layer);
    keyboard.appendChild(layer);
  }
  function layerFour() {
    const layer = document.createElement("div");
    layer.classList.add("layer");
    addKey(shiftBut, "SHIFTLEFT", layer);
    layer4.us.split("").forEach(key => {
     addKey(key,"KEY"+key.toUpperCase(), layer);
    });
    addKey(commaBut.us, "COMMA", layer);
    addKey(dotBut.us, "PERIOD", layer);
    addKey(stickRBut,"SLASH",layer);
    addKey(arrowUpBut,"ARROWUP",layer);
    addKey(shiftBut, "SHIFTRIGHT", layer);
    keyboard.appendChild(layer);
  }
  function layerFive() {
    const layer = document.createElement("div");
    layer.classList.add("layer");
    addKey(ctrlBut, "CONTROLLEFT", layer);
    addKey(winBut,"METALEFT", layer);
    addKey(altBut,"ALTLEFT",layer);
    addKey(spaceBut,"SPACE", layer);
    addKey(altBut, "ALTRIGHT", layer);
    addKey(arrowLeftBut,"ARROWLEFT",layer);
    addKey(arrowDownBut,"ARROWDOWN",layer);
    addKey(arrowRightBut,"ARROWRIGHT",layer);
    addKey(ctrlBut, "CONTROLRIGHT", layer);
    keyboard.appendChild(layer);
  }

  function addKey(button,classEl,layer) {
    const keyElement = document.createElement("button");
    keyElement.classList.add("key");
    keyElement.innerHTML = button;

    keyElement.value = classEl;
    if (button === spaceBut){
      keyElement.classList.add("space-but");
    }else if (button === shiftBut || button === ctrlBut){
      keyElement.classList.add("shift-ctrl-but");
    }
    layer.appendChild(keyElement);
  }


  layerOne();
  layerTwo();
  layerThree();
  layerFour();
  layerFive();
  
}


export { createHeader, createTextArea, createKeyboard, createToggleBar };
