import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  function DomainGenerator(){
    let randPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let randomAdj = adj[Math.floor(Math.random() * adj.length)];
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    
    let dom = `${randPronoun}${randomAdj}${randomNoun}.com`;
    document.getElementById("dom").innerHTML= dom
  }
  
  DomainGenerator();
  
};
