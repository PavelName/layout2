// "use strict";
// const yesDay = {

//     title: '', 
//     screens:[], 
//     screenPrice: 0, 
//     adaptive: true, 
//     rollback:  10,
//     allServicePrices: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     services:{}, 
     
//     start: function() {
//        yesDay.asking();
//        yesDay.addPrices();
//        yesDay. getFullPrice();
//        yesDay.getServicePercentPrices();
//        yesDay. getTitle();
//        yesDay.logger();
//     },
//     isNumber : function(num) {
//        return !isNaN(parseFloat(num)) && isFinite(num);
//    },
   
//     asking: function () {
//     yesDay.title = prompt('Как называется ваш проект?');
   

//        for (let i = 0; i < 2; i++) {
//            let name =  prompt('Какие типы экранов нужно разработать?','Простые','Сложные');
//            let price = 0;

//            do {
//                price = prompt('Сколько будет стоить данная работа?','1000'); 
//            }
//            while(!yesDay.isNumber(price));

//            yesDay.screens.push({id: i, name:name, price:price});

//        }
      

//        for (let i = 0; i < 2; i++){ 
//            let name = prompt('Какой дополнительный тип услуг нужен?');
//            let price = 0;
   
//            do{ 
//        price = prompt("Сколько это будет стоить?");
//            }
//            while(!yesDay.isNumber(price));
//            yesDay.services[name] = +price;   
//        }

//        yesDay.adaptive = confirm('Нужен ли адаптив на сайте?');
   
// },

// addPrices: function() {
//    for (let screen of yesDay.screens) {
//        yesDay.screenPrice += +screen.price;
//    }
//    for(let key in yesDay.services) {
//        yesDay.allServicePrices += yesDay.services[key];
//    }
// }, 


// getFullPrice: function () {
//    yesDay.fullPrice = +yesDay.screenPrice  +yesDay.allServicePrices;
// },

// getServicePercentPrices : function () {
//    yesDay.servicePercentPrice =  yesDay.fullPrice - (yesDay.fullPrice * (yesDay.rollback / 100));
// },

// getTitle : function () {
//    yesDay.title = yesDay.title.trim()[0].toUpperCase() + yesDay.title.trim().substr(1).toLowerCase();
// },

// getRollbackMessage : function (price) {
//    if (price > 30000) {
//        return ('Делаем скидку 10%');
//    } else if (price > 15000 && price < 30000) {
//        return ('Делаем скидку 5%');
//    } else if (price < 15000 && price > 0) {
//        console.log('Скидка не предусмотрена');
//    } else if (price < 0) {
//        return ('Что то пошло не так!');
//    }
// },


// logger: function() {

// console.log(yesDay.fullPrice);
// console.log(yesDay.servicePercentPrice);
// console.log(yesDay.screens);
// },
// };

// yesDay.start(); 