function solve() {
  let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let rightAnswers = 0;
  let index = 0;

  const answers = Array.from(document.querySelectorAll(".answer-text"));
  answers.forEach(a => {
    a.addEventListener("click", (e) => {
      let answerText = a.textContent;

      if (correctAnswers.includes(answerText)) {
        rightAnswers++;
      }

      let currSection = document.querySelectorAll("section")[index];
      currSection.style.display = "none";

      if (document.querySelectorAll("section")[index + 1] !== undefined) {
        let nextSection = document.querySelectorAll("section")[index + 1];
        nextSection.style.display = "block";
        index++;
      } else {
        document.querySelector("#results").style.display = "block";
        if (rightAnswers !== 3) {
          document.querySelector("#results .results-inner h1").textContent = `You have ${rightAnswers} right answers`;;
        } else {
          document.querySelector("#results .results-inner h1").textContent = "You are recognized as top JavaScript fan!";
        }
      }
    });
  });
}

  // Array
  //   .from(document.querySelectorAll(".answer-text"))
  //   .map((x) => x.addEventListener("click", function nextSection(e) {

  //     if (correctAnswers.includes(e.target.innerHTML)) {
  //       rightAnswered++;
  //     }

  //     let currSection = document.querySelectorAll("section")[index];
  //     currSection.style.display = "none";

  //     if (document.querySelectorAll("section")[index + 1] !== undefined) {
  //       let nextSection = document.querySelectorAll("section")[index + 1];
  //       nextSection.style.display = "block";
  //       index++;
  //     } else {
  //       document.querySelector("#results").style.display = "block";
  //       if (rightAnswered !== 3) {
  //         document.querySelector("#results h1").textContent = `You have ${rightAnswered} right answers`;
  //       } else {
  //         document.querySelector("#results h1").textContent = "You are recognized as top JavaScript fan!";
  //       }
  //     } 
  //   }));
