const menu = [
  { name: "margarita", price: 40 },
  { name: "peporinin", price: 10 },
  { name: "bacon", price: 20 },
  { name: "chicken", price: 30 },
];

let cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find((pizzaObj) => {
    return pizzaObj.name === pizzaName;
  });
  cashInRegister += selectedPizza.price;
  const newOrder = { pizza: selectedPizza, status: "Ordered" };
  orderQueue.push(newOrder);
  return newOrder;
};
