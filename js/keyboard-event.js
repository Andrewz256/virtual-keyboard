

window.addEventListener(
    "keydown",
    (event) => {
        let codeKey = `${event.code}`;
        let valueKey = `${event.key}`;
        const output = document.getElementById("output");
        const keyButton = document.getElementsByTagName("button");
        
        output.textContent += " " + valueKey;
        if (valueKey == "Shift"){
            for (let i=0 ; i <keyButton.length; i++) {
                keyButton[i].classList.add("capitalize");
            }
        };
        for (let i=0 ; i <keyButton.length; i++) {
            if(keyButton[i].value==codeKey.toUpperCase()){
                keyButton[i].classList.add("active");
            };

        };

    },
    true
    );

window.addEventListener(
    "keyup",
    (event) => {
    let codeKey = `${event.code}`;
    let valueKey = `${event.key}`;
    const keyButton = document.getElementsByTagName("button");
    if (valueKey == "Shift"){
        for (let i=0 ; i <keyButton.length; i++) {
            keyButton[i].classList.remove("capitalize");
        };
    };
    for(let j=0 ; j<keyButton.length; j++){
        if(keyButton[j].value == codeKey.toUpperCase()){
            keyButton[j].classList.remove("active");
        };
    };
})

function keyPress() {
  const key = document.querySelectorAll(".key");
  const output = document.getElementById("output");

  for (let i=0; i<key.length; i++){
    key[i].addEventListener(
      "click",
      (event) => {
        if (key[i].value == "MINUS" ){
          output.textContent += " -";
        } else if (key[i].value == "BACKQUOTE" ){
          output.textContent += " `";
        } else if (key[i].value == "EQUAL" ){
          output.textContent += " =";
        } else if (key[i].value == "SEMICOLON" ){
          output.textContent += " ;";
        } 
          else {
          output.textContent += " " + key[i].textContent;
        }
        
      }
    )
  }

}

export { keyPress };