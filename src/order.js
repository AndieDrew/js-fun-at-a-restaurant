function takeOrder(object, array) {
  if(array.length < 3){
  array.push(object);
}
}


function refundOrder(object, array){
//if object arguement is 1, delete first item from deliveryOrders array
if(object === 1){
  array.shift(object);
//otherwise do nothing
} else //if(object === 2)(I realized i dont need this)
{
//delete order2
//splice needs 2 values, index and amount of values to be removed
  array.splice(1, 1);
}// else {} (I realized i don't need this)
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!EXPLAIN!!!!!!!!!!!!!!!!!!!!!!!!!!!

function listItems(list) {
  var threeFoods = "";
  for(var i = 0; i < list.length; i++){
   threeFoods = threeFoods + list[i].item + ", ";
 } return threeFoods.slice(0, -2);
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!EXPLAIN!!!!!!!!!!!!!!!!!!!!!!!!!!!


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
