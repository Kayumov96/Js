// turini aniqlovchi  funksiya===========================
//  function type () {
//      var l = 30==14
//      return console.log(typeof(l))
//  };
//  type();
// //-----------------------------------------------
// function getPow (son, daraja){
//     return console.log(son ** daraja); 
// };
// getPow(4, 5);
// //=====================================================
// const string  =[
//     'Australia', 'Germany', 'United States of America', 
// ];
// function longest(arr){
//     var result = '';
//     for(let i = 0; i < arr.length; i++){
//         let current = arr[i];
//         if(current.length>result.length){
//             result = arr[i];
//         }
//     }
//     return result;
// };
// console.log(longest(string))

//Cars price============================================
//var price = 7500;
//  function getPrice (price ){
//  if (price >= 6500 && price < 7000){
//     console.log("DAMAS olishingiz mumkin")
// }
// else if ( price >= 7000 && price < 9000){
//     console.log("SPARK olishingiz mumkin")
// }
// else if(price >=9000 && price < 11000){
//     console.log("NEXIA 3 olishingiz mumkin")
// }
// else if (price >=11000 && price < 13000){
//     console.log("COBALT olishingiz mumkin")
// }
// else if(price >= 13000 && price < 16000){
//     console.log("GENTRA olishingiz mumkin")
// }
// else if (price >= 25000 && price < 29000){
//     console.log("MALIBU olishingiz mumkin")
// }
// else if (price >= 35000 && price < 45000){
//     console.log("TRAILBLAZER olishingiz mumkin")
// }
//   return price
// }
// getPrice(16600)
 //var str = 'wh at ha ppe ned b ro'
//    var str = "003045808511000040"
//    var trimmed = '';
//    for(let i =0; i<str.length; i++){
//      if(str[i] !=='0'){
//         trimmed += str[i];
        
//     }    
//    }
//   console.log(trimmed);

// var son = '00000010020000'.replace(/^0+/, '');

// console.log(son);
//===========================================
// function getSort(str1, str2){
//   let sort = str1.split('').sort().join();
//   let sort2= str2.split('').sort().join();
//   return sort ===sort2
// }
// console.log(getSort('abs', 'bsa'))
// console.log(getSort('sab', 'Abs'));
//=============================================
  //==================================
 
//    var arr = [1,2,3,4,5];
//    var arr2 = [];
//   arr.map((value, i) =>{
//      if (value % 2 == 0) {
//       arr2.push(value);
//      arr2.push(arr[i]-1 + arr[i] +1) 
//      }
//   })
//  console.log(arr2);

//========================================
// let a = 8;
// let p = a*4
// console.log(p)
//=============
// let a =4
// let s = a*a;
// console.log(s);
//===============
// let a = 6;
// let b = 8;
// let s = a*b;
// let p =2 * (a + b);
// console.log(s ,'yuza',p , 'perimetr')
//===============
// let d = 30;
// let p =3.14;
// let l = p*d;
// console.log('Aylana uzunligi',l)
//===============
// let a = 10;
// let v = a*a*a;
// let s = 6 * a*a;
// console.log('Hajmi', v, 'To\'la sirti', s)
//============
// var rg =['sebde', 'djej', 22]
// var arr = [ 12, 'eguege',...rg, 'wgdiyde', 'drfr'];
// console.log(arr)
//==============
// var arr = [1, 2, 3, 'asd', 4, 5, 6, 7, 8, 9, 9, 3, 4, 4, 'asd',];
// var newArray = arr.filter((value, index) => { 
//   console.log(index, arr.indexOf(value))
//   return index ===arr.indexOf(value);
// })
// console.log(newArray)
//=============