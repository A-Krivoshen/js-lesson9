use strict;

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

// Задание 1

function fixAmount(amount) {
    amount = Number(amount.toString().replace(',', ".").replace(/[^\d.]/g, ''));
    
    if(!(amount)) {
	return -1;
    } 
	return amount;
}

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра ' },
  { price: 1, amount: 'семь единиц' }
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}

// Задание 2

let secretKey = '';
function handleKey (char) {
  secretKey = secretKey + char;
  if(/r2d2$/i.test(secretKey)){
    return showSpecialPrice();
  }
}

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let char of keys) {
  handleKey(char);
}

// задание 3

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

function parseData(listOfBox, lineOfFile, separator = ',') {
  var finelObj = [];
    for(var i = 0; i < lineOfFile.length; i++){
        var str = lineOfFile[i].split(',');
          finelObj[i] = {};
     for(var f = 0; f < listOfBox.length; f++){
          finelObj[i][listOfBox[f]] = typeof str[f] !== 'undefined' ? str[f].trim() : '';
        }
      }
      return finelObj;
}
let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);