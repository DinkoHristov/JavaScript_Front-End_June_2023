window.addEventListener("load", solve);

function solve() {   
  const nextButton = document.getElementById("next-btn");
  const itemsList = document.getElementById("preview-list");
  const candidatesList = document.getElementById("candidates-list");

  const studentName = document.getElementById("student");
  const university = document.getElementById("university");
  const score = document.getElementById("score");

  nextButton.addEventListener("click", (e) => {
    if (studentName.value === "" || university.value === "" || score.value === "") {
      return;
    }

    let name = studentName.value;
    let school = university.value;
    let result = score.value;

    let li = document.createElement("li");
    li.className = "application";

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = `${studentName.value}`;

    let p1 = document.createElement("p");
    p1.textContent = `University: ${university.value}`;

    let p2 = document.createElement("p");
    p2.textContent = `Score: ${score.value}`;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    let editButton = document.createElement("button");
    editButton.className = "action-btn edit";
    editButton.textContent = "edit";

    let applyButton = document.createElement("button");
    applyButton.className = "action-btn apply";
    applyButton.textContent = "apply";

    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(applyButton);

    itemsList.appendChild(li);

    studentName.value = "";
    university.value = "";
    score.value = "";

    nextButton.disabled = true;

    editButton.addEventListener("click", (e) => {
      studentName.value = name;
      university.value = school;
      score.value = result;

      itemsList.innerHTML = "";

      nextButton.disabled = false;
    });

    applyButton.addEventListener("click", (e) => {
      let savedList = document.createElement("li");
      savedList.className = "application";

      savedList.appendChild(article);
  
      itemsList.innerHTML = "";
      candidatesList.appendChild(savedList);

      nextButton.disabled = false;
    });

  });
} 