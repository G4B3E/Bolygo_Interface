"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
let celestialbody = [];
let Nev = document.getElementById('Nev');
let Kor = document.getElementById('Kor');
let Atmero = document.getElementById('Atmero');
let Watercontent = document.getElementById('Watercontent');
let Hibamezo = document.getElementById('Hiba');
function NevCheck(Nev) {
    console.log("D0");
    let reg = new RegExp('^[a-zA-Z ]*$');
    if (Nev.length >= 2 && Nev != "" && reg.test(Nev)) {
        return true;
    }
    return false;
}
function KorCheck(Kor) {
    if (Kor >= 1 && Kor != null) {
        return true;
    }
    return false;
}
function MeretCheck(Meret) {
    if (Meret >= 1500 && Meret != null) {
        return true;
    }
    return false;
}
function WaterContentCheck(Watercontent) {
    if (Watercontent >= 0 && Watercontent <= 100 && Watercontent != null) {
        return true;
    }
    return false;
}
function Uresmezo() {
    Nev.value = " ";
    Kor.value = " ";
    Atmero.value = " ";
    Watercontent.value = " ";
    Hibamezo.textContent = " ";
}
function checkAll() {
    if (NevCheck(Nev.value) && KorCheck(parseInt(Kor.value)) && MeretCheck(parseInt(Atmero.value)) && WaterContentCheck(parseInt(Watercontent.value))) {
        celestialbody.push(new Planet_1.Planet(Nev.value, parseInt(Kor.value), parseInt(Atmero.value), parseInt(Watercontent.value)));
        Uresmezo();
    }
    else {
        Hibamezo.textContent = "";
        console.log("valami nem jó");
        if (!NevCheck(Nev.value)) {
            Hibamezo.textContent = "A bolygó neve csak az ABC betűjeiből állhat!";
        }
        else if (!KorCheck(parseInt(Kor.value))) {
            Hibamezo.textContent = "Az életkor csak pozítív szám lehet!";
        }
        else if (!MeretCheck(parseInt(Atmero.value))) {
            Hibamezo.textContent = "Az átmérő minimum 1500 km kell, hogy legyen!";
        }
        else if (!WaterContentCheck(parseInt(Watercontent.value))) {
            Hibamezo.textContent = "A vízfelület aránya 0 és 100 érték között kell, hogy legyen!";
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    console.log("D1");
    (_a = document.getElementById("Submit")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        console.log("D2");
        console.log(NevCheck(Nev.value));
    });
});
