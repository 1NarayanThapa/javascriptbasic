console.log("there are more than 20 method in array")
// // 1.sort()
// var a=["narayan","Aman",20,30];

// a.sort();
// var a=[10,30,3,7];
// //2.reverse
// a.reverse();
// console.log(a)
//3.pop()
 var a=["narayan","Aman","Harry","Billgates"];
 /*
a.pop()//last ko value lai matrai hatauxh index diyepani
// 4.push()
a.push("jeff")//last ma nai push hunxh
//5.shift() yesle chai first ko lai pop garxh
a.shift()
//6.unshift() uesle first ko ma push garxh
a.unshift("warren")
//7.concat() 
  a=a.concat("20")
console.log(a)
//concat ma 2 ta arry lai nai pani concat garnw milxh
var b=[39,"ram","puskal"]
var s=[40,34]
var c= a.concat(b,s);
console.log(c)
//8.join different array ko value lai eutai banauxh
 var z=s.join();
// c */
// 9.slice()existing arry batw arko arry nikalne

 var b=a.slice(2,4)
 
//  10.splice()
console.log(a)
//  var b=a.splice(2,2)//value delete gareko ho
 var b=a.splice(2,1,"neha","hari")
 console.log(b)
 console.log(a)
//  11.isArray()to check array or not
 var b=Array.isArray(a);
 console.log(b)
 //12.indexOf()//index value dinxh
 //1.direct index rakherw
 //2.starting index diyerw
 //3.starting rw ending 2 ta nai index diyerw
 console.log(a)
  var b=a.indexOf("neha")
  b=a.indexOf("hari",2)
  b=a.indexOf("hari",2,3)
//   13.lastIndexOf()
//  b=a.lastIndexOf("Billgates")
b=a.lastIndexOf("Billgates",4)

b=a.lastIndexOf("Billgates",4,0)
// 14.includes() it check weather the value is contain or not ..euta value matrai contain gareko xa vane aru value contain gareko xaina vane pani true dinxh
b=a.includes("Aman","heha",10,39393)
 console.log(b)
//  15.some() it will return true if it will contain greater or equal value
// var c=[10,16,18,20]
// b=c.some(checkAdult);
// console.log(b);
function checkAdult(age){
    if(age>=18){
        return age;
    }

}
var c=[10,16,18,20]
//16.every() all the value must be equal or greter than the cheking value
b=c.every(checkAdult);
console.log(b)
// 17.find() it will find value and give the value which will satisty the condition
b=c.find(checkAdult);
for(i=0;i<4;i++)
console.log(c[i])
// 18.findIndex()//sondition satisfy vayepaxi ko first value ko index dinxh
b=c.findIndex(checkAdult);
console.log(b)
//19.filter()
b=c.filter(checkAdult)
console.log(b)
// 20.toString() yesle arrya lai string ma concvert garxh ra aru kunai pani method apply garnw mildaina kinaki yo string ma convert vaisakeko xa
// /*  b=c.toString()
//  console.log(b) */
//  21.valueOf()yo normally use hudaina kinaki hamile arr[0] type batw pani value nikalna sakxau
b=c.valueOf()
console.log(b.valueOf())//narakhda pani hunxh
// 22.fill() sabai array value ma eutai value repeat garne
 var g=["ram ","hari","gopal"]
 /* console.log(g)
 b=g.fill('manish')
 console.log(b) */
//  23.forEach() yesle chai forEach loop nabauna help garne function ho
g.forEach(function(value,i){
   console.log(value,i)

});



 


