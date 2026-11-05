//prendiamo un riferimento al tag html con id="btn-calcola"
const btn = document.getElementById("btn-calcola");
const aIn = document.getElementById("a");
const bIn = document.getElementById("b");
const cIn = document.getElementById("c");
const s1 = document.getElementById("soluzione1");
const s2 = document.getElementById("soluzione2");
//metodo 1
/* btn.addEventListener("click", function(){
...
}) */

//metodo 2
/* btn.addEventListener("click", ()=>{
...
})
 */

//metodo 3f

function calcolaSoluzioni(){
    console.log("a=",aIn.value);
    console.log("b=",bIn.value);
    console.log("c=",cIn.value);
    let a=parseFloat(aIn.value);
    let b=parseFloat(bIn.value);
    let c=parseFloat(cIn.value);
    console.log("a+b=",a + b);

    let x1,x2;
    let delta = (b*b) - (4*a*c);
    
    if(delta>0){
        x1=(b+Math.sqrt(delta))/(2*a);
        x2=(b-Math.sqrt(delta))/(2*a);

    }else if(delta==0){
        x1 = b/(2*a);

    }else{
        x1="DELTA MINORE DI ZERO => Impossibile"
    }

    s1.textContent = "x1 = "+x1;
    s2.textContent = "x2 = "+x2;
}

btn.addEventListener("click", calcolaSoluzioni);