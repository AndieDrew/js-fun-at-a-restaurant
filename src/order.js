//on line 114-115 function takeOrder is invoked twice being passed 2 arguments each time.
//object takes in order3, then order4 objects. Array takes in diliveryOrders array [order1, order2]
//to satisfy test line 117-118 we need diliveryOrders array to have a length of 3 values and
//the values to specifically be [order1, order2, order3]
function takeOrder(object, array) {
//if deliveryOrders length is less than 3 values
  if(array.length < 3){
//take deliveryOrders and push whatever argument is passed into the object parameter
  array.push(object);
}
//otherwise do nothing
}
//this will take dilveryOrders [order1, order2] and push argument order3 (line 114) into the array
//and ignore order4 argument from line 115



//we need make deliveryOrders which is currently [order1, order2, order3](line 185)
//have a array value length of 2(line 189), and them equal [order1, order3](line 190)
//refundOrder function takes 2 arguments, an integer and the deliveryOrders array
function refundOrder(num, array){
if(num === 1){ //if parameter num arguement is 1(line 154)
  array.shift(num); //delete first item from deliveryOrders array(order1)
} else //otherwise
  {
    array.splice(1, 1);//splice out one value at index 1 of the dileveryOrders array
  }
}




//declare function listItems with one parameter that accepts argument from line 225
function listItems(list) { //list accepts diliveryOrders argument which is an array with 3 objects
//to satisfy test on line 227 we need to put the item key of each order object into a string
  var threeFoods = ""; //this variable threeFoods creates an empty string to store values inspect
//declare for loop with variable i that initializes at index 0. if i is less than the length
//of parameter list (deliveryOrders argument which is array with 3 objects) than iterate/increment
  for(var i = 0; i < list.length; i++){
//for each iteration, exicute the code below. Below we are assigning var threeFoods the value of
//it's self + list iterations item key + string ", "
   threeFoods = threeFoods + list[i].item + ", ";//output: "burger, blt sandwich, rueben, "
//to satisfy test we need to delete the last 2 index values ", " from the string
} return threeFoods.slice(0, -2);
//to do this we return threeFoods with the last 2 parts of the string being spliced out
}//output now matches the string on line 227




//function SearchOrder has 2 paramtetrs, orders and food
//orders takes in deliveryOrders when invoked on lines 255-257
function searchOrder(orders, food){
//(orders[0].item) is using bracket and dot notation to
//follow path: diliveryOrders array, first item in that array
//then the item key
//if that key's value is equal to the argument pushed into food
//from lines 255-257 (arguments: "burger" "sushi" "blt sandwich")
  if(orders[0].item === food || orders[1].item === food){
    return true; //than return true
  } else { //otherwise if not,
    return false; //return false
  }
}


//Original code for searchOrder below (Epic Fail)
//   for(var i = 0; i < orders.length; i++)  {
//     if(orders.item === "burger"){
//       orders.item === true;
//     } else if(orders.item === "sushi"){
//       orders.item === false;
//     } else if(orders.item === true){}
//   }
//
// }

module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
