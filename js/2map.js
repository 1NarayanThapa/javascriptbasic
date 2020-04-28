console.log("change the existing array or array of object and disply something new")
// var a=[10,2,3,4];
//  a.map(test);

// function test(value){
//     c= value*10; 
//     console.log(c)
// }
var obj=[{
    name:"narayan",age:21},
    {name:"jeff",age:25}
]
// console.log(obj[0].name)
obj.map(test);
function test(value){
    var d=value.name+"  "+value.age
    console.log(d)
}

