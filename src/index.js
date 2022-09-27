import "./main.scss";
import {Buttons} from './components/button/button';
// import {ANKETA} from './components/ANKETA/ANKETA';

const add123 = (a, b) => a + b;
const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Buttons());
// root.insertAdjacentHTML('beforeend', ANKETA());

const res = add123(222, 3);
console.log("Helloasda");

// Шахматная доска

// let even = '# # # # # # # # ';
// let odd = ' # # # # # # # #';

// for (let i = 0; i < 8; i++){
//     if ( i % 2 == 0) console.log(even);
//     else console.log(odd);
// }

// // Сотка

// let num
// do {
//     num = +prompt('Введите число больше 100', '')
// } while ( num <= 100 && num)


// const rates = {
//     rub: 'Русские рубли',
//     usd: 'Американский доллар',
//     eur: 'Евро'
// }
 
// let user = prompt('Какую валюты вы хотите снять',)

// alert(rates[user])


// let descriptor = Object.defineProperty(rates, 'usd', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })


// for ( let key in rates){
//     console.log(key);
// }
// rates123.usd = 'aswdfsf';


// let salaries = {
//     John: 100,
//     Ann: 100,
//     Pete: 120
// }

// let sum = 0
// for ( let key in salaries){
//     sum += salaries[key] ;
// }
// console.log(sum)


// function delenie(a,b){
//     alert(a*b)
// }

// delenie(2,3)

// alert(delenie.arguments)

// function sayHea(...params){
//     for (let arg of params){
//         console.log(arg)
//     }
// }

// sayHea(123,'qwe',123,'fff','qqq',{name: 'qweqw'})


// const obj1 = {
//     name: 'Igor'
// };

// const obj2 = {
//     age: 12,
//     ...obj1
// }

// console.log(obj2)


// const sum = (...num) => {
//     let non = 0;
//     for ( let key of num){
//         non += key;
//     }
//     return non
// }

// console.log(sum(1,2,3,4,5))

// let min = (a,b) => {
//     if (a < b){
//         return a
//     }
//         return b
// }
// //or
// const miin = (a, b) => a < b ? a : b;
// console.log(min(5,3))
// console.log(miin(5,3))



// const isPolindrom = (text) => {
//     let text2 = "";
//     for(let i = text.length - 1; i >1)
// }
