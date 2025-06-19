/* 
  TASK-F
  Yagona string argumentga ega findDoublers nomli function tuzing
  Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
  true yokida false natija qaytarsin.

  MASALAN:  findDoublers("hello"); natija true qaytadi. 
            Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

*/

// masalani yechimi
function findDoublers(str){
  return new Set(str).size !== str.length
}

// masalani yechimi 2
function findDoublers(str){

  for (let char of str) {
    if(str.indexOf(char) !== str.lastIndexOf(char)) return true
  }
  return false;
}

const result = findDoublers("heelo");
console.log(result);

// =================================================================// 
/*
  E-TASK: 
  Shunday function tuzing, u bitta string argumentni qabul qilib 
  osha stringni teskari qilib return qilsin.
  MASALAN: getReverse("hello") return qilsin "olleh"
*/

// function getReverse(str){
//   return str.split('').reverse().join("");
// }

// const strReverse = getReverse("hello world");
// console.log(strReverse);

// ≈============================== //

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq" // 60
// ]

// SYNC function
// function maslahatBering(a,callback){
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a >= 20 && a <= 30) callback(null, list[1]);
//   else if (a >= 30 && a <= 40) callback(null, list[2]);
//   else if (a >= 40 && a <= 50) callback(null, list[3]);
//   else if (a >= 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(()=> {
//       callback(null, list[5]);
//     }, 1000);
//     // setTimeout(()=> {
//     //   callback(null, list[5]);
//     // }, 5000);
//   }
// }

// console.log("passed here: 0");
// maslahatBering(65, (err, data) => {
//   if(err){
//     console.log("ERROR: ", err)
//   }else{
//     console.log("Javob: ",data);
//   }
// })
// console.log("passed here: 1");

// // ASYNC function
// async function maslahatBering(a){
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a >= 20 && a <= 30) return list[1];
//   else if (a >= 30 && a <= 40) return list[2];
//   else if (a >= 40 && a <= 50) return list[3];
//   else if (a >= 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(()=> {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// // then/catch
// console.log("passed here: 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("Javob :", data);
//   }).catch((err) => {
//     console.log("ERROR: ", err);
//   })  
// console.log("passed here: 1");


// // async/await
// async function run() {
//   let javob = await maslahatBering(70);
//   console.log("Javob :", javob);
//   javob = await maslahatBering(30);
//   console.log("Javob :", javob);
//   javob = await maslahatBering(50);
//   console.log("Javob :", javob);
// }

// run();


// =========================================== //
// A-TASK:  
/*  Shunday 2 parametrli function tuzing, 
    hamda birinchi parametrdagi letterni ikkinchi
    parametrdagi sozdan qatnashga sonini
    return qilishi kerak boladi. */

// // masalani yechimi:
// function countLetter(char, str){
//   if(typeof char !== 'string' || char.length !== 1) {
//     console.log("The first parameter must be a single character.");
//   }else if(typeof str !== 'string') {
//     console.log("The second parameter must be a string.");
//   }

//   let count = 0;
//   for(let i=0; i< str.length; i++){
//     if(str[i] === char){
//       count++;
//     }
//   }
//   return count;
// }

// let result = countLetter("r", "abrorbek");
// console.log(result);
// // =========================================== //

/* 
  B-TASK:   
  Shunday function tuzing, u 1ta string parametrga ega bolsin,
  hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
*/
// // masalani yechimi 1:
// function countStr(str){
//   if (typeof str !== "string" || str.length <= 0){
//     console.log("Insert only strings and string length is 1 or more");
//   }

//   let count = 0;

//   for(let char of str.toLowerCase()){
//     if(char >= 'a' && char <= 'z'){
//       count++;
//     }
//   }
//   return count;
// }

// const result = countStr("123asd");
// console.log(result);

// ========================================//

// // masalani yechimi 2:
// function countStr(str){
//   if (typeof str !== "string" || str.length <= 0){
//     console.log("Insert only strings and string length is 1 or more");
//   }

//   let count = 0;

//   for(let char of str.toLowerCase()){
//     if(isNaN(Number(char))){
//       count++;
//     }
//   }
//   return count;
// }

// const result = countStr("123asdasdW12");
// console.log(result);

// ========================================================== //

/* 
  MITASK-C 
    Shunday class tuzing tuzing nomi Shop, 
    va uni constructoriga 3 hil mahsulot pass bolsin,
    hamda classning 3ta methodi bolsin, biri qoldiq, 
    biri sotish va biri qabul. Har bir method ishga 
    tushgan vaqt ham log qilinsin.
*/

// // masalani yechimi:

// const moment = require("moment");
// const nowTime = moment().format("hh:mm");
// class Shop{
//   #product_1;
//   #product_1_Cnt;
//   #product_2;
//   #product_2_Cnt;
//   #product_3;
//   #product_3_Cnt;
//   constructor(product_1, product_2, product_3){
//     this.#product_1 = product_1,
//     this.#product_1_Cnt = 0,
//     this.#product_2 = product_2,
//     this.#product_2_Cnt = 0,
//     this.#product_3 = product_3,
//     this.#product_3_Cnt = 0
//   }

//   qabul(product, proCount){
//     if(typeof product === "string" && typeof proCount === "number"){
//       switch (product) {
//         case this.#product_1:
//           this.#product_1_Cnt += proCount;
//           break;
//         case this.#product_2:
//           this.#product_2_Cnt += proCount;
//           break
//         case this.#product_3:
//           this.#product_3_Cnt += proCount;
//           break
//         default:
//           console.log("Notogri maxsulot kiritdingiz!");
//       }
//     }else{
//       console.log("Notogri malumot kiritdingiz");
//     }
//   };

//   sotish(product, proCount){
//     if(typeof product === "string" && typeof proCount === "number"){
//       switch (product) {
//         case this.#product_1:
//           this.#product_1_Cnt -= proCount;
//           break;
//         case this.#product_2:
//           this.#product_2_Cnt -= proCount;
//           break
//         case this.#product_3:
//           this.#product_3_Cnt -= proCount;
//           break
//         default:
//           console.log("Notogri maxsulot kiritdingiz!");
//       }
//     }else{
//       console.log("Notogri malumot kiritdingiz");
//     }
//   };

//   qoldiq(){
//     return `Horir ${nowTime}da: 
//     ${this.#product_1_Cnt}ta ${this.#product_1},
//     ${this.#product_2_Cnt}ta ${this.#product_2} va 
//     ${this.#product_3_Cnt}ta ${this.#product_3} mavjud!`
//   };
// }

// const newShop = new Shop("shashlik", "non", "somsa");

// newShop.qabul("shashlik", 5);
// newShop.qabul("non", 15);
// newShop.qabul("somsa", 25);
// newShop.sotish("somsa", 5);

// const qoldiq = newShop.qoldiq();
// console.log(qoldiq);


// const newShop2 = new Shop("qazi", "shorva", "osh");
// newShop2.qabul("qazi", 5);
// newShop2.qabul("shorva", 15);
// newShop2.qabul("osh", 25);
// newShop2.sotish("shorva", 5);

// const qoldiq2 = newShop2.qoldiq();
// console.log(qoldiq2);

// ========================================================== //

/*
  Shunday function tuzing, u 2ta string parametr ega bolsin,
  hamda agar har ikkala string bir hil harflardan iborat bolsa 
  true aks holda false qaytarsin.
*/

// // masala yechimi:
// function checkContent(str1, str2){
//   if (str1.length !== str2.length) return false;
//   /* Pastdagi codeni chozib yozilishi!!
//     let list1 = str1.split("");
//     let list2 = str2.split("");
//     let list1sort = list1.sort();
//     let list2sort = list2.sort();
//     let list1join = list1sort.join('')
//     let list2join = list2sort.join('')

//     return list1join === list2join;
//   */
  
//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// const result = checkContent("sssdaa", "aadsss");
// console.log(result);

// ========================================================== //
