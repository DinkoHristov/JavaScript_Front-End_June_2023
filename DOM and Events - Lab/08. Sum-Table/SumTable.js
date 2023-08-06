function sumTable() {
    const rows = Array.from(document.querySelectorAll("td:nth-child(2)"));
    const sum = rows.reduce((acc, curr) => {
        return acc += Number(curr.textContent);
    }, 0);

    document.getElementById("sum").textContent = sum;
}