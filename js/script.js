'use strict'


const title = document.getElementsByTagName('h1')[0] ;

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const buttonPlus = document.querySelector('.screen-btn');

const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let divScreen = document.querySelectorAll('.screen');

const yesDay = {

    title: '', 
    screens:[], 
    screenPrice: 0, 
    adaptive: true, 
    rollback:  10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services:{}, 
     
    start: function() {
    //    yesDay.asking();
    //    yesDay.addPrices();
    //    yesDay. getFullPrice();
    //    yesDay.getServicePercentPrices();
    //    yesDay. getTitle();
    //    yesDay.logger();
    },
    isNumber : function(num) {
       return !isNaN(parseFloat(num)) && isFinite(num);
   },
   
    asking: function () {
    yesDay.title = prompt('Как называется ваш проект?');
   

       for (let i = 0; i < 2; i++) {
           let name =  prompt('Какие типы экранов нужно разработать?','Простые','Сложные');
           let price = 0;

           do {
               price = prompt('Сколько будет стоить данная работа?','1000'); 
           }
           while(!yesDay.isNumber(price));

           yesDay.screens.push({id: i, name:name, price:price});

       }
      

       for (let i = 0; i < 2; i++){ 
           let name = prompt('Какой дополнительный тип услуг нужен?');
           let price = 0;
   
           do{ 
       price = prompt("Сколько это будет стоить?");
           }
           while(!yesDay.isNumber(price));
           yesDay.services[name] = +price;   
       }

       yesDay.adaptive = confirm('Нужен ли адаптив на сайте?');
   
},

addPrices: function() {
   for (let screen of yesDay.screens) {
       yesDay.screenPrice += +screen.price;
   }
   for(let key in yesDay.services) {
       yesDay.allServicePrices += yesDay.services[key];
   }
}, 


getFullPrice: function () {
   yesDay.fullPrice = +yesDay.screenPrice  +yesDay.allServicePrices;
},

getServicePercentPrices : function () {
   yesDay.servicePercentPrice =  yesDay.fullPrice - (yesDay.fullPrice * (yesDay.rollback / 100));
},

getTitle : function () {
   yesDay.title = yesDay.title.trim()[0].toUpperCase() + yesDay.title.trim().substr(1).toLowerCase();
},

getRollbackMessage : function (price) {
   if (price > 30000) {
       return ('Делаем скидку 10%');
   } else if (price > 15000 && price < 30000) {
       return ('Делаем скидку 5%');
   } else if (price < 15000 && price > 0) {
       console.log('Скидка не предусмотрена');
   } else if (price < 0) {
       return ('Что то пошло не так!');
   }
},


logger: function() {

console.log(yesDay.fullPrice);
console.log(yesDay.servicePercentPrice);
console.log(yesDay.screens);
},
};

yesDay.start(); 


console.log(title);
console.log(startBtn);
console.log(resetBtn);
console.log(buttonPlus);
console.log(otherItemsPercent);
console.log(otherItemsNumber);

console.log(inputRange);
console.log(inputRangeValue);
console.log(total);
console.log(totalCount);
console.log(totalCountOther);
console.log(totalFullCount);
console.log(totalCountRollback);
console.log(divScreen);




