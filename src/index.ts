import { CelestialBody } from "./CelestialBody_interface";
import { Planet } from "./Planet";

let CelestialBody = [];
let Nev = (document.getElementById('Nev') as HTMLInputElement);
let Kor = (document.getElementById('Kor') as HTMLInputElement);
let Atmero = (document.getElementById('Atmero') as HTMLInputElement);
let Watercontent = (document.getElementById('Watercontent') as HTMLInputElement);
let Hibamezo = (document.getElementById('Hiba') as HTMLInputElement);


function NevCheck(Nev : string) : boolean {
    console.log("D0");
    let reg = new RegExp('^[a-zA-Z ]*$')
    if (Nev.length >= 2 && Nev != "" && reg.test(Nev)) {return true}
    return false;
}
function KorCheck(Kor : number) : boolean { 
    if (Kor >= 1 && Kor != null) {return true}
    return false;
}
function MeretCheck(Meret : number) : boolean { 
    if (Meret >= 1500 && Meret != null) {return true }
    return false;
}
function WaterContentCheck(Watercontent : number) : boolean { 
    if (Watercontent >= 0 && Watercontent <= 100 && Watercontent != null) {return true }
    return false;
}

function Uresmezo() {
    Nev.value= " ";
    Kor.value= " ";
    Atmero.value= " ";
    Watercontent.value= " ";
    Hibamezo.textContent = " ";
    
}

function checkAll() {
    if(NevCheck(Nev.value) && KorCheck(parseInt(Kor.value)) && MeretCheck(parseInt(Atmero.value)) && WaterContentCheck(parseInt(Watercontent.value)) ) {
        CelestialBody.push(new Planet(Nev.value, parseInt(Kor.value),parseInt(Atmero.value), parseInt(Watercontent.value)))
        Uresmezo();
    }
    else {
        Hibamezo.textContent = "";
        if(!NevCheck(Nev.value)) {
            Hibamezo.textContent ="A bolygó neve csak az ABC betűjeiből állhat!";
        }else if(!KorCheck(parseInt(Kor.value))) {
            Hibamezo.textContent ="Az életkor csak pozítív szám lehet!";
        } else if (!MeretCheck(parseInt(Atmero.value))) {
            Hibamezo.textContent ="Az átmérő minimum 1500 km kell, hogy legyen!";
        } else if (!WaterContentCheck(parseInt(Watercontent.value))) {
            Hibamezo.textContent ="A vízfelület aránya 0 és 100 érték között kell, hogy legyen!";
        }
    }
}


document.addEventListener("DOMContentLoaded", () => { 
    console.log("D1");
    document.getElementById("Submit")?.addEventListener('click', () => {
        console.log("D2");
        console.log(NevCheck(Nev.value));
        


    })

});
