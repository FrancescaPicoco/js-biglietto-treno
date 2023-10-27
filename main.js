const kilom = parseInt(prompt("Inserisci i kilometri che si desiderano percorrere"));
const eta = parseInt(prompt("Inserisci la tua età"));
let fullprice = (kilom * 0.21);

console.log(kilom);
console.log(eta);
console.log(fullprice)
//const saleUnder = ((fullprice * 20) / 100);
//const saleOver = ((fullprice * 40) / 100); 

if ( isNaN (eta) || isNaN(kilom) ){
    document.getElementById("mex").innerHTML = `Error`;
    console.log(`i caratteri non sono numerici`);   
}else if( eta < 18) {
    const saleUnder=((fullprice * 20) / 100);
    document.getElementById("mex").innerHTML = `Hai diritto allo sconto under 18 : ${saleUnder}`;
    console.log("costo scontato" , saleUnder);
    } else if( eta >= 65) {
    const saleOver=((fullprice * 40) / 100);
    document.getElementById("mex").innerHTML = `Hai diritto allo sconto over 65 ${saleOver}`;
    console.log("costo scontato" , saleOver);
    }
    else {
    document.getElementById("mex").innerHTML = `Prezzo: ${fullprice}`;
    console.log("prezzo pieno" , fullprice);
    }