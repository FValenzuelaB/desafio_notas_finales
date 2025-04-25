
//HTML
let nota1 =parseFloat(prompt("HTML ingrese Nota1: "))
document.getElementById("n1HTML").textContent=nota1.toFixed(1)

let nota2 =parseFloat(prompt("HTML ingrese Nota2: "))
document.getElementById("n2HTML").textContent=nota2.toFixed(1)

let nota3 =parseFloat(prompt("HTML ingrese Nota3: "))
document.getElementById("n3HTML").textContent=nota3.toFixed(1)

var promedioHTML = (nota1 + nota2 + nota3)/3
document.getElementById("promediohtml").textContent=promedioHTML.toFixed(1)

//CSS
let nota1css =parseFloat(prompt("CSS ingrese Nota1: "))
document.getElementById("n1CSS").textContent=nota1css.toFixed(1)

let nota2css =parseFloat(prompt("CSS ingrese Nota2: "))
document.getElementById("n2CSS").textContent=nota2css.toFixed(1)

let nota3css =parseFloat(prompt("CSS ingrese Nota3: "))
document.getElementById("n3CSS").textContent=nota3css.toFixed(1)

var promedioCSS = (nota1css + nota2css + nota3css)/3
document.getElementById("promediocss").textContent=promedioCSS.toFixed(1)

//JavaScript
let nota1js =parseFloat(prompt("JS ingrese Nota1: "))
document.getElementById("n1js").textContent=nota1js.toFixed(1)

let nota2js =parseFloat(prompt("JS ingrese Nota2: "))
document.getElementById("n2js").textContent=nota2js.toFixed(1)

let nota3js =parseFloat(prompt("JS ingrese Nota3: "))
document.getElementById("n3js").textContent=nota3js.toFixed(1)

var promedioJS = (nota1js + nota2js + nota3js)/3
document.getElementById("promediojs").textContent=promedioJS.toFixed(1)