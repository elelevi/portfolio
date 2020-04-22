
let correct = 0;
let rank;
const main = document.querySelector("main");

alert("How well do you know me? Let's play a game!");

const answer1 = prompt("How old am I?");
if (answer1.toUpperCase() === "35" ) {
  correct += 1;
}

const answer2 = prompt("What is my name?");
if (answer2.toUpperCase() === "ELENA" ) {
  correct += 1;
}document
const answer3 = prompt("Where am I from");
if (answer3.toUpperCase() === "RUSSIA" ) {
  correct += 1;
}

const answer4 = prompt("What is my favorite city?");
if (answer4.toUpperCase() === "BARCELONA" ) {
  correct += 1;
}

const answer5 = prompt("What is my favorite food?");
if (answer5.toUpperCase() === "JAMON" ) {
  correct += 1;
}

if (correct === 5) {
rank = "Gold";
}

else if (correct === 4) {
rank = "Silver";
}

else if (correct === 3) {
rank = "Bronze";
}

else {
rank = "None :(";
}

main.innerHTML = `
<h2>You got ${correct} out of 5 question correct.</h2>
<p>Crown earned: <strong>${rank}</strong></p>
`;