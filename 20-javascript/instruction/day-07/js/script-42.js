document.querySelector("#btnGetAverage").addEventListener("click", () => {
  const txtScore1 = document.querySelector("#txtScore1");
  const txtScore2 = document.querySelector("#txtScore2");
  const elResult = document.querySelector("#result");

  if(!isScoreValid(txtScore1.value) || !isScoreValid(txtScore2.value)){
    alert("Please enter valid scores");
    return;
  }

  const score1 = Number(txtScore1.value);
  const score2 = Number(txtScore2.value);

  const average = getAverage(score1, score2);
  const letter = convertToLetter(average);

  elResult.innerHTML = `Average: ${average} <br> Letter: ${letter}`
  


});

const getAverage = (num1, num2) => {
  return (num1 + num2) / 2;
};

const convertToLetter = (score) => {
  let letter = "";

  if (score >= 90) {
    letter = "A";
  } else if (score >= 80) {
    letter = "B";
  } else if (score >= 70) {
    letter = "C";
  } else if (score >= 60) {
    letter = "D";
  } else {
    letter = "F";
  }

  return letter;
};

const isScoreValid = (score) => {
  return !!score && score >= 0 && score <= 100;
};


/* console.log(isScoreValid(null));
console.log(isScoreValid(""));
console.log(isScoreValid(undefined));
console.log(isScoreValid(NaN));
console.log(isScoreValid(false));
console.log(isScoreValid(50));
console.log(isScoreValid(150));
console.log(isScoreValid(-150)); */
