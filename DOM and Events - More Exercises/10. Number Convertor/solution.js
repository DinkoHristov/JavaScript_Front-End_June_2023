function solve() {
    const number = document.getElementById("input");
    const result = document.getElementById("result");

    let selectMenuTo = document.getElementById("selectMenuTo");
    let optionBinary = document.createElement("option");
    optionBinary.value = "binary";
    optionBinary.innerHTML = "Binary";
    selectMenuTo.appendChild(optionBinary);

    let optionHexadecimal = document.createElement("option");
    optionHexadecimal.value = "hexadecimal";
    optionHexadecimal.innerHTML = "Hexadecimal";
    selectMenuTo.appendChild(optionHexadecimal);

    const button = document.querySelector("button");

    button.addEventListener("click", (e) => {
        let selectedOption = document.getElementById("selectMenuTo").value;
        if (selectedOption === "binary") {
            result.value = Number(number.value).toString(2);
        } else if (selectedOption === "hexadecimal") {
            result.value = Number(number.value).toString(16).toUpperCase();
        }
    });
}