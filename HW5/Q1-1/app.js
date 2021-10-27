const startBtn = document.querySelector(".start");
const castBox = document.querySelector(".race-cast");
const winnerEl = document.querySelector(".winner-announcer");
let casterEl;
let carNames = [];
let carCounts = 0;
let step = {};
let whileChecker = 0;
let stage = [];

startBtn.addEventListener("click", () => {
  let Cars = function (carCounts, carNames, step, stage) {
    this.carCounts = carCounts;
    this.carNames = carNames;
    this.step = step;
    this.stage = stage;
  };

  raceCasting();
  getCars();
  shuffleArray(carNames);
  stepSpecifier();
  stageMaker();

  casterEl.textContent = `The game has started!\n`;
  const newStage = [...stage];
  let car = new Cars(carCounts, carNames, step, stage);
  console.log(car);
  let turn = 0;
  let winner;

  raceMap();

  function raceMap() {
    while (Object.keys(car.step).includes(turn.toString())) {
      for (let j = 0; j < carCounts; j++) {
        car.stage[car.step[turn][j]] = car.carNames[j];
      }
      console.log(`==========turn #${turn + 1}`);
      casterEl.textContent += `==========turn #${turn + 1}\n`;
      console.log(car.stage.join(""));
      casterEl.textContent += `${car.stage.join("")}\n`;
      winner = car.stage[whileChecker];
      for (let j = 0; j < carCounts; j++) {
        car.stage[car.step[turn][j]] = "*";
      }
      turn++;
    }
  }

  console.log(`"${winner}" is the Winner!!`);
  winnerEl.innerHTML = `<i class="fas fa-trophy"></i> Car "${winner}" has won the race! <i class="fas fa-trophy"></i>`;
});

//================================================================================================================================
//FUNCTIONS!!!!!!!!

function raceCasting() {
  casterEl = document.createElement("span");
  castBox.innerHTML = ``;
  casterEl.classList.add("cast");
  castBox.appendChild(casterEl);
}
//=======================================================================================
function getCars() {
  carNames = [];
  carCounts = parseInt(prompt("How many cars are participating in the race ?"));
  if (isNaN(carCounts)) {
    alert("Choose a number for car count!");
    getCars();
  } else if (carCounts < 1) {
    alert("You need at least 1 car to start the race!");
    getCars();
  } else {
    for (let i = 1; i <= carCounts; i++) {
      let carName = prompt(`Type the name of car #${i}`);
      carName === "" ? i-- : carNames.push(carName);
    }
  }
  return carNames;
}
//=======================================================================================
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
//=======================================================================================
function stepSpecifier() {
  let i = 0;
  let tempSum = [];
  whileChecker = 0;
  step = {};
  for (let j = 0; j < carCounts; j++) {
    tempSum[j] = 0;
  }
  while (whileChecker < 299) {
    let moves = [];
    for (let j = 1; j <= carCounts; j++) {
      tempSum[j - 1] += Math.floor(Math.random() * 10) + 1;
      for (let element in moves) {
        if (tempSum[element] === tempSum[j - 1]) {
          tempSum[element] = 0;
          moves[element] = 0;
        }
      }
      moves.push(tempSum[j - 1]);
      for (let element in moves) {
        if (tempSum[element] >= 299) {
          whileChecker = tempSum[element];
          break;
        }
      }
    }

    step[i] = moves;
    i++;
  }
}
//=======================================================================================
function stageMaker() {
  stage = [];
  for (let i = 0; i < 300; i++) {
    stage.push("*");
  }
  return stage;
}
