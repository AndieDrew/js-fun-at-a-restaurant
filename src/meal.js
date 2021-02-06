//test line 20 is declaring a variable called menuItemName
//which is equal to the function below, but with a arguement of
//"Pizza" so below I added a food parameter that the argument can
//enter.
//in order to satisfy the test on line 21 (asserts that menuItemName
//is equal to "Delicious Pizza") I do the following:
//inside the function below I'm reassigning variable menuItemName
//to equal the string "Delicious " + (+ is a string operator)
//the food parameter that's been given a "Pizza" arguement
//then I'm using the return statement to end the function exicution
//and specify a value to be returned
//Also the function is reusable, so line 25-27 can pass in new
//arguments and the function will satisfy line 29-31
function nameMenuItem(food) {
  menuItemName = "Delicious " + food;
  return menuItemName;
};


//I created a function named createMenuItem with 3 parameters
//and a variable inside called menuItem that is = (= is an assignment operator)
//to an object contained in curly brackets. Inside the object I have
//3 keys and didn't need to write the values because they were
//already assereted on lines 44-46 of the test
function createMenuItem(name, price, type) {
   menuItem = {
    name,
    price,
    type,
  };
  return menuItem;
};




function addIngredients(ingredient, ingredients) {

  if(ingredients.includes(ingredient)){
    return ;
  }
  //otherwise return ingredients array with ingredient arguement added.
return ingredients = ingredients.push(ingredient);
}

function formatPrice(food) {
  return "$" + food;
}
function decreasePrice(price){
  // - .60 would have worked but what if we have a different
  //number for the arguement? it wouldn't still be 10%
  return price * .9;
};

function createRecipe(title, ingredients, type){
  return {
    title,
    ingredients,
    type,
  }
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
