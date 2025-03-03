import "bootstrap";
import "./style.css";

let pronoun = ['the', 'our', 'my', 'your'];
let adj = ['great', 'big', 'fast', 'small'];
let noun = ['jogger', 'racoon', 'developer', 'designer'];
let ext = ['.com', '.es', '.net', '.io', '.dev'];

window.onload = function () {
  function generateDomains() {
    let domainList = ""; 
    
    for (let i = 0; i < 5; i++) { 
      let randPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
      let randomAdj = adj[Math.floor(Math.random() * adj.length)];
      let randomNoun = noun[Math.floor(Math.random() * noun.length)];
      let randomExt = ext[Math.floor(Math.random() * ext.length)];
      
      let domain = `${randPronoun}${randomAdj}${randomNoun}${randomExt}`;
      domainList += `<p class='alert alert-warning'>${domain}</p>`;
    }
    
    document.getElementById("domainList").innerHTML = domainList;
  }

  generateDomains();

  document.getElementById("generateDomain").addEventListener("click", generateDomains);

  document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    let icon = document.querySelector("#darkModeToggle i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
};
