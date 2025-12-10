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

// input
const userInput = document.getElementById("user-input");
// knappen
const btn = document.getElementById("meal-submit");

//Skapa en eventlistener för knappen som lyssnar på click och där vi kan lägga funktionalitet
btn.addEventListener("click", function(){
  fetchData(userInput);
})

async function fetchData(input) {
  let userIn = input.value;
  try{
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${userIn}` );

    const json = await response.json();
    const meals = json.meals;
    console.log(meals);

    // Hämta huvud-container där vi lägger all data; bilder text
    const container = document.getElementById("meal-results");

    // Tömmer tidigare inmatningar
    container.innerHTML = "";

    if(meals){
      for(let meal of meals){
        const createDiv = document.createElement("div");
        createDiv.innerHTML = `
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
        `;
        container.appendChild(createDiv);

      }


    }

  }
  catch(error){
    console.error(error);
  }


}

