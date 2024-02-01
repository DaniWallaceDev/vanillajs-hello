/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  let who = [
    "Mi madre",
    "Mi abuela",
    "Un viejo",
    "Michael Jackson",
    "MoureDev"
  ];
  let action = ["se comió", "quemó", "rompió", "lanzó", "embadurnó", "lamió"];
  let what = ["mi trabajo", "mi trasero", "mi almuerzo", "mis calzoncillos"];
  let how = ["lentamente", "suavemente", "bruscamente", "a conciencia"];
  let when = [
    "antes de clase",
    "hace unos minutos",
    "cuando salí del trabajo",
    "mientras me comía un plato de lentejas",
    "mientras escuchaba Everybody"
  ];
  function excusa() {
    let who2 = who[Math.floor(Math.random() * who.length)];
    let action2 = action[Math.floor(Math.random() * action.length)];
    let what2 = what[Math.floor(Math.random() * what.length)];
    let how2 = how[Math.floor(Math.random() * how.length)];
    let when2 = when[Math.floor(Math.random() * when.length)];

    return who2 + " " + action2 + " " + what2 + " " + how2 + " " + when2;
  }

  document.getElementById("excuse").innerHTML = excusa();
};
