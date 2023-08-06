function search() {
   const towns = Array.from(document.querySelectorAll("#towns li"));
   const searchText = document.getElementById("searchText").value;

   let foundCount = 0;
   towns.forEach(town => {
      let townName = town.textContent;

      if (townName.includes(searchText)) {
         town.innerHTML = `<bold><u>${townName}</u></bold>`;
         foundCount++;
      }
   });

   let result = document.getElementById("result");
   result.textContent = `${foundCount} matches found`;
}
