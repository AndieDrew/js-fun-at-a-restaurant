//create function called createRestaurant that will satisfy test on line 13
//then add parameter "name" that matches the .name on line 18
//it has to be name, because .name is looking for a "name" key inside
//a pizzaRestaurant object, and the key gets it's value from the
//parameter which gets it's argument "Sexy Pizza"
function createRestaurant(name) {
//this variable below has been declared on line 17, it equals the function
//with an argument of "Sexy Pizza"
  pizzaRestaurant = {
//adding "Sexy Pizza" to the key below would satisfy first test but
//I have to leave it blank so that other values can use the same key
    name,
//after assert we have .isObject on line 30, this let me know that .menus
//needed to be an object, then line 36-38 tells me that object menus
//needs three keys with empty arrays as values
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }

  }; return pizzaRestaurant;
}
//return, returns the value of what the return statement calls



//function addMenuItem takes with 2 parameters takes in arguements
//pizzaRestaurant, bbqPizza

//to satisfy test on line 57, i need to make .lunch[0] nested inside pizzaRestaurant
//argument = bbqPizza array on line 49, variable on line 49 is being invoked
//into this functions second parameter on line 57. So, I need to make
//.lunch[0] = bbqPizza

//thing1 parameter is given pizzaRestaurant arguement, which needs to = bbqPizza
//we use dot notation to get to the nested lunch key, and push thing2's arguement
//bbqPizza inside. This satisfies first test on line 47
function addMenuItem(restaurant, food) {
if(food.type === "lunch"){
  restaurant.menus.lunch.push(food);
}
if(food.type === "breakfast" && !restaurant.menus.breakfast.includes(food)){
  restaurant.menus.breakfast.push(food);
}
}


//below, I need to make pizzaRestaurant function, go to its menus object, and change its
//breakfast key to equal an empty array value, lunch key to equal an array value with bbqPizza
//and dinner key equal to a array value that stores veggie pizza
//then I need to output the string on line 171

function removeMenuItem(place, string1, string2) {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
