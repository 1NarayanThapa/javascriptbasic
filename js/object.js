console.log("it is the advanced form of array");
var a={
    name:"Narayan",
    age:21,
    gender:"Male",
    Address:"Kathmandu",
    arr:[3,2,"jeff","warren"],
    salary:function(){
        return ("it is function")
    },
    fullname:function(){
     console.log("first-name: "+this.name ) 
      console.log("    gender:  "+this.gender) 
    }
}
console.log()
// console.log(a)
// console.log(a.name)//particuler key ko value print garna
// console.log(a.salary())
// console.log(a.fullname());
//  c =a.arr[2]
//  console.log(c)


