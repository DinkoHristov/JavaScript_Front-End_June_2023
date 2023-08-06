function solve() {
  const inputText = document.getElementById("text").value.toLowerCase();
  const inputCase = document.getElementById("naming-convention").value;

  let result = "";

  if (inputCase === "Camel Case") {
    let newText = inputText.split(" ");
    for (let i = 0; i < newText.length; i++) {
      let currWord = newText[i];
      if (i === 0) {
        result += currWord;
      } else {
        let upperWord = currWord[0].toUpperCase();
        let otherWord = currWord.substr(1, currWord.length);

        let finalWord = upperWord + otherWord;
        console.log(finalWord);
        result += finalWord;
      }
    }
  } else if (inputCase === "Pascal Case") {
    let newText = inputText.split(" ");
    
    for (let i = 0; i < newText.length; i++) {
      let currWord = newText[i];
      let upperWord = currWord[0].toUpperCase();
      let otherWord = currWord.substr(1, currWord.length);

      let finalWord = upperWord + otherWord;
      console.log(finalWord);
      result += finalWord;
  }
  } else {
    result = "Error!";
  }

  console.log(result);
  let resultContainer = document.getElementById("result");
  resultContainer.textContent = result;
  
  const transfromButton = document.querySelector('input[type="button"]');
  transfromButton.disabled = true;;
}