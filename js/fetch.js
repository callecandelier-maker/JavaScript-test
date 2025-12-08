
const userInput = document.getElementById("userInput");
const button = document.getElementById("meal-submit");

button.addEventListener("click", async (e) => {
  let userIn = userInput.value;
  await fetch(`https://https://www.themealdb.com/api/json/v1/1/search.php?f=l` + userIn)
  .then(res => res.json())
    .then(data => res = data);


  res.meals.forEach()
})

/*
async function fetchData() {
  let res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=l');

  res = await res.json();

  console.log(res.meals[0]);
}
*/
fetchData();

