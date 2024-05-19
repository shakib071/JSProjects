
const loadMeal= (INPUT)=>{
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${INPUT}`)
  .then(res=>res.json())
  .then(data=>{
      
      
      console.log(data.meals);
      
      displayMeal(data.meals);

  })
  .catch(error => {
    alert("No data Found");

})
};




const displayMeal=(meals)=>{
   console.log(meals);
   const mealContainer=document.getElementById("home-container");
   meals.forEach(meal=>{

    const div=document.createElement("div");
    div.classList.add("card");
    
    
    div.innerHTML=`
    <div class class="box", onclick="handleBoxClick(${meal.idMeal})">
    <img id="img-img" class="img-card" src=${meal.strMealThumb} alt=""/>
    <h3>Name: ${meal.strMeal}</h3>
   </div>
    `;
   
    mealContainer.appendChild(div);
    // document.getElementById("img-img").addEventListener("click", handleClickInsideBox);

    
    
}
);
}






const handleSearch=(event)=>{
  const inputvalue=document.getElementById("search-box").value;
  console.log(inputvalue);

  if(inputvalue!=""){
    loadMeal(inputvalue);
  }

 
  
}

function handleBoxClick(id) {
  
  console.log("hi");
  console.log(id);
  searchMealByID(id);
}


const searchMealByID=(id)=>{
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then(res=>res.json())
  .then(data=>{
      
      
      console.log(data.meals);
      displayMealdetails(data.meals);

  })
};



const displayMealdetails=(meals)=>{
 const mealDetails=document.getElementById("search-item");
 meals.forEach(meal=>{

  const div=document.createElement("div");
  div.classList.add("search-found");
  
  
  div.innerHTML=`
  <img id="img-img" class="img-card" src=${meal.strMealThumb} alt=""/>
   <h2> ${meal.strMeal} <h2>
   <hr>
   <h3>INGRIDIENTS</h3>
   <h4>1.${meal.strIngredient1} </h4>
   <h4>2.${meal.strIngredient2} </h4>
   <h4>3.${meal.strIngredient3} </h4>
   <h4>4.${meal.strIngredient4} </h4>
   <h4>5.${meal.strIngredient5} </h4>
  `;
 
  mealDetails.append(div);
  
  
});
}



