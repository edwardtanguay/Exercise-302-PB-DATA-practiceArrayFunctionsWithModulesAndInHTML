//import { test } from "./test.js";
import { customers } from "./customers.js";
import { orders } from "./orders.js";
import { products } from "./products.js";
console.log(`There are ${customers.length} customers.`);
console.log(`There are ${orders.length} orders.`);
console.log(`There are ${products.length} products.`);

//1
console.log("--------------1--------------");
customers.forEach((customer) => {
  console.log(customer.companyName);
});

//2
console.log("--------------2--------------");
customers.forEach((customer) => {
  console.log(`${customer.address.city} - ${customer.companyName}`);
});

//3
console.log("--------------3--------------");
customers.forEach((customer) => {
  if (customer.address.city === "London") {
    console.log(`${customer.address.city} - ${customer.companyName}`);
  }
});

//4
console.log("--------------4--------------");
const displayCustomerOrders = function (customerId) {
  let result = "";
  customers.forEach((customer) => {
    if (customer.customerID === customerId) {
      let countOfOrders = 0;
      orders.forEach((order) => {
        if (order.customerID === customerId) {
          countOfOrders++;
        }
        result = `${customer.companyName} (${customerId}) has ${countOfOrders} orders`;
      });
    }
  });
  return result;
};

console.log(displayCustomerOrders("AROUT"));

//5
console.log("--------------5--------------");
const getCustomerOrderObject = function (customerId) {
  let result = {};
  customers.forEach((customer) => {
    if (customer.customerID === customerId) {
      const ordersIDsList = [];
      orders.forEach((order) => {
        if (order.customerID === customerId) {
          ordersIDsList.push(order.orderID);
        }
        result = {
          id: customerId,
          name: customer.companyName,
          orderIds: ordersIDsList,
        };
      });
    }
  });
  return result;
};
console.log(getCustomerOrderObject("AROUT"));

//6
console.log("--------------6--------------");
const getProductsOrderedByCustomer = function (customerId) {
  const productNamesList = [];
  customers.forEach((customer) => {
    if (customer.customerID === customerId) {
      orders.forEach((order) => {
        if (order.customerID === customerId) {
          order.details.forEach((detail) => {
            products.forEach((product) => {
              if (detail.productID === product.productID) {
                productNamesList.push(product.name);
              }
            });
          });
        }
      });
    }
  });
  return productNamesList;
};
console.log(getProductsOrderedByCustomer("AROUT"));
