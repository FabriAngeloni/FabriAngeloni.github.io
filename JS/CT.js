const ticket=200
function calcularTotal() {
    let cant=document.getElementById("cant").value

    let cate=document.getElementById("cate").value
console.log(cant);
console.log(cate);
let desc;
console.log(desc);
if (cate==1) {
    desc=80
} else if(cate==2) {
    desc=50;
} else {
    desc=15
}

let total = cant*ticket

total -= total*desc/100

console.log(total);

document.getElementById("total").innerHTML=total
}
