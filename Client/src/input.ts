//Setup keys for checking
let keys = [
  ["w", false],
  ["a", false],
  ["s", false],
  ["d", false],
  ["shift", false],
];

let mouseX: number = 0;
let mouseY: number = 0;
let mouseDown: boolean = false;

//Checking for key presses
document.addEventListener("keydown", function (event) {
  let keyPressed = event.key.toLowerCase();
  changeKey(keyPressed, true);
});

//Checking for key releases
document.addEventListener("keyup", function (event) {
  let keyPressed = event.key.toLowerCase();
  changeKey(keyPressed, false);
});

//Change key state
function changeKey(keyPressed: string, down: boolean) {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i][0] == keyPressed) {
      keys[i][1] = down;
      break;
    }
  }
}

document.addEventListener("mousedown", (e) => {
  mouseDown = true;
});

document.addEventListener("mouseup", (e) => {
  mouseDown = false;
});

document.addEventListener(
  "mousemove",
  function (event) {
    var canvas = document.getElementById("mainCanvas");
    if (canvas) {
      var rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    }
  },
  false
);

//Change states from input field inputs
function changeProtocol() {
  let checkBox = <HTMLInputElement>document.getElementById("protocolCheck");
  if (checkBox) {
    ws = checkBox.checked;
  }
}
function changeSpectator() {
  let checkBox = <HTMLInputElement>document.getElementById("spectatorCheck");
  if (checkBox) {
    spectator = checkBox.checked;
  }
}
function changeURL() {
  let urlInput = <HTMLInputElement>document.getElementById("url");
  if (urlInput) {
    url = urlInput.value;
  }
}
