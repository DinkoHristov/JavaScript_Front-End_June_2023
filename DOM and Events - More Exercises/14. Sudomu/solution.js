function solve() {
    const buttons = Array.from(document.querySelectorAll("button"));
    const checkButton = buttons[0];
    const clearButton = buttons[1];

    const columns = Array.from(document.querySelectorAll("tbody tr td input"));
    let isEqual = false;
    checkButton.addEventListener("click", (e) => {
        for (let row = 0; row < columns.length / 3; row++) {
            let firstNumber = Number(columns[row].value);
            let secondNumber = Number(columns[row + 3].value);
            let thirdNumber = Number(columns[row + 3 + 3].value);

            if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
                isEqual = true;
                break;
            }
        }

        if (!isEqual) {
            for (let i = 0; i < columns.length; i += 3) {
                let firstNumber = Number(columns[i].value);
                let secondNumber = Number(columns[i + 1].value);
                let thirdNumber = Number(columns[i + 2].value);

                if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
                    isEqual = true;
                    break;
                }
            }
        }
        
        if (!isEqual) {
            const table = document.querySelector("table");
            table.style.border = "2px solid green";
            const pText = document.querySelector("#check p");
            pText.textContent = "You solve it! Congratulations!";
            pText.style.color = "green";
        } else {
            const table = document.querySelector("table");
            table.style.border = "2px solid red";
            const pText = document.querySelector("#check p");
            pText.textContent = "NOP! You are not done yet...";
            pText.style.color = "red";
        }
    });

    clearButton.addEventListener("click", (e) => {
        columns.forEach(number => {
            number.value = "";
        });

        const table = document.querySelector("table");
        table.style.border = "none";
        const pText = document.querySelector("#check p");
        pText.textContent = "";
        pText.style.color = "none";
    });
}