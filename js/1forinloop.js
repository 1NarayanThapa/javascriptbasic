console.log("for in loop is specially used for display the object beacase obj contain key and value not index like array")
var obj=
    {
    firstName:"Narayan",
    lastName:"Thapa",
     age:21,
    nationality:"nepali"}

 console.log(obj.firstName);
 for(i in obj){
     console.log(obj[i])
 }
// for(var i=0;i<;i++){
//     console.log(obj[i]) 
// }