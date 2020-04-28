console.log("return value will go into the calling function");


function sum(math,eng,sc){
    var total=math+eng+sc;
    return total;
}
function percentage(b){
    var pr=b/300*100;
    console.log(pr);

}
 var b=sum(34,24,32);
 console.log(b)
 percentage(b)

