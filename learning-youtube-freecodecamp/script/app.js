var menu = [
    { name: "margarita", price: 40 },
    { name: "peporinin", price: 10 },
    { name: "bacon", price: 20 },
    { name: "chicken", price: 30 },
];
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 1;
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
var placeOrder = function (pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        pizza: selectedPizza.name,
        status: "Ordered",
        id: nextOrderId++,
    };
    orderQueue.push(newOrder);
    return newOrder;
};
var completeOrder = function (orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("Order with ID ".concat(orderId, " not found."));
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
