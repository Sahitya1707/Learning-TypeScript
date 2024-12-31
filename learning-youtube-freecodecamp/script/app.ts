// pizza object type
type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  status: string;
  pizza: string;
};
const menu: Pizza[] = [
  { name: "margarita", price: 40 },
  { name: "peporinin", price: 10 },
  { name: "bacon", price: 20 },
  { name: "chicken", price: 30 },
];

let cashInRegister: number = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

const placeOrder = (pizzaName: string) => {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;

  const newOrder = {
    pizza: selectedPizza.name,
    status: "Ordered",
    id: nextOrderId++,
  };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId: number) => {
  let order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Order with ID ${orderId} not found.`);
    return;
  }
  order.status = "completed";
  return order;
};

addNewPizza({ name: "Chicken bacon ranch", price: 12 });

placeOrder("Chicken bacon ranch");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order Queue", orderQueue);
