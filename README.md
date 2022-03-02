# Practice array functions with modules and in HTML

Use basic JavaScript module export/import and DOM/HTML skills to create a website where you can practice using the ES6 higher-order functions

## Set up new npm project in new directory

- make sure you are in an empty folder to create a new npm project
- type `npm init -y` to create a basic `package.json` file
- in the `package.json` file add the entry `"type":"module"` **so that you can use ES6 import/export**

![grafik](https://user-images.githubusercontent.com/446574/156308171-389fccff-b314-4b6e-9745-2ccd9a10eb77.png)
- create a test module called `test.js`
```
export const test = 'module works';
```
- create your main file called `main.js` and import and use the test module
```
import { test } from './test.js';

console.log(test);
```
- type `node main.js` and you should see:

![grafik](https://user-images.githubusercontent.com/446574/156309658-48e08584-5f2f-4d50-b300-b36c7952ca06.png)


## Setup data modules (customers, orders, products)

- create `customers.js` module by copying [this customers JSON text](https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json) into a file exporting it as an array:

![grafik](https://user-images.githubusercontent.com/446574/156310437-bd056ed6-1942-403e-8989-ba5673194806.png)
- in `main.js` import the customers array and display the number of customers:
```
import { customers } from './customers.js';

console.log(`There are ${customers.length} customers.`);
```


## Practice ES6 functions in JavaScript file with import/export


## Practice ES6 functions in HTML with import/export
