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
//already assereted on lines 41-42
//lines 41 and 42 create variables that are equal to this function
//but with arguments. These parameters take in those arguments.
function createMenuItem(name, price, type) {
   menuItem = {
    name,
    price,
    type,
  };
  return menuItem;
};




function addIngredients(zoink, ingredients) {
//zoink takes in cheese/peppers/peppers arguments
//ingredients taks in var ingredients = [] (an empty array)
//if ingredients array includes a repeated argument
  if(ingredients.includes(zoink)){
    return ;
//return nothing
  }
  //otherwise return ingredients array with zoink arguement added.
return ingredients = ingredients.push(zoink);
}


//declare function formatPrice with food parameter
function formatPrice(food) {
//return $ symbol infront of argument passed through food parameter
  return "$" + food;
}


//declare function decreasedPrice with price parameter
function decreasePrice(price){
// "- .60" would have worked for 6.00 but what if we have a different
//number for the arguement? it wouldn't still be 10%
//thats why I chose to use .9 which will decrease any value by 10%
  return price * .9;
};


//declare function createRecipie that has 3 parameters
//these parameters match the onese defined in var recipe which
//equals this function.
function createRecipe(title, ingredients, type){
//returning an object that that includes the same parameters
//whos values are given by the tests
  return {
    title,
    ingredients,
    type,
  }
};
//This exports the functions in this file to the test file
//allowing the variables, parameters, arguements ect work together.
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
