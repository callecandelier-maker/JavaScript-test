/*
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

fetchData();
*/


// <input type="text" placeholder="Enter meal here" id="user-input">
//   <button id="meal-submit">Search</button>
// <div id="meal-results"></div>

// hämta input
const userInput = document.querySelector(".user-input");

//hämta knapp
const btn = document.querySelector(".meal-submit");

// hämta div
const resultDiv = document.querySelector(".meal-results");


function buttonSearch(){
  btn.addEventListener("click", function(){
    fetchData(userInput);
  })
}

buttonSearch();




// måste skapa en parameter som vi kan koppla vad som skrivs i input till vad vi vill söka
async function fetchData(input) {

  try{

    // hämta ipnut data
    let userIn = input.value;

    // fetch url
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userIn}`);

    // konvertera url till json
    const data = await response.json();
    console.log(data);
    // koppla json till olika meals och skriv ut
    // detta gör man i en for loop som loopar igenom alla objekt
    for (let meal of data.meals){
      const renderDiv = document.createElement("meal-results");
      // h-element, img src, alt text, p-elemnt
      renderDiv.textContent = meal.strMeal;
      renderDiv.im

      /*renderDiv.innerHTML =
        `<h3>${meal.strMeal}</h3>
     <img src="${meal.strMealThumb}">`*/

      resultDiv.appendChild(renderDiv);

    }

  }
  catch(error){
    console.error(error);
  }
}

