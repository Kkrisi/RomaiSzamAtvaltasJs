

//A feladat, hogy tesztvezérelt fejlesztéssel írj olyan föggvényt,
//amely bemeneti paramétere  1 és 39 közötti egész szám, kimenete
//pedig ennek a számnak a római szám alakja. 



export function romaiSzamAtvaltas(szam) {
    if (szam < 1 || szam > 39) {
        console.log("Csak 1 és 39 közötti számot adhatunk meg!");
    } else {
    

        const romaiSzamok = ["I", "IV", "V", "IX", "X", "XL", "L"];
        const latinSzamok = [1, 4, 5, 9, 10, 40, 50];
        

        var eredmeny = "";

        for (let i = latinSzamok.length - 1; szam > 0; i--) {
            //console.log("Aktuális szám: " + szam);

            while (szam >= latinSzamok[i]) {
                eredmeny += romaiSzamok[i];
                //console.log("szam: " + szam + " eredmeny: " + eredmeny);
                szam -= latinSzamok[i];
                ///console.log("szam: " + szam + " eredmeny: " + eredmeny);
            }
        }
    }
    
    return eredmeny;
}




export function romaiTeszt() {

    console.log("A teszt életbe lépett!");

    console.assert(romaiSzamAtvaltas(1) === "I", "Hiba: 1-et vártunk, de " + romaiSzamAtvaltas(1) + " kapunk.");
    console.assert(romaiSzamAtvaltas(2) === "II", "Hiba: 2-őt vártunk, de " + romaiSzamAtvaltas(2) + " kapunk.");
    console.assert(romaiSzamAtvaltas(3) === "III", "Hiba: 3-at vártunk, de " + romaiSzamAtvaltas(3) + " kapunk.");
    console.assert(romaiSzamAtvaltas(4) === "IV", "Hiba: 4-et vártunk, de " + romaiSzamAtvaltas(4) + " kapunk.");
    console.assert(romaiSzamAtvaltas(5) === "V", "Hiba: 5-öt vártunk, de " + romaiSzamAtvaltas(5) + " kapunk.");
    console.assert(romaiSzamAtvaltas(6) === "VI", "Hiba: 6-ot vártunk, de " + romaiSzamAtvaltas(6) + " kapunk.");
    console.assert(romaiSzamAtvaltas(7) === "VII", "Hiba: 7-et vártunk, de " + romaiSzamAtvaltas(7) + " kapunk.");
    console.assert(romaiSzamAtvaltas(8) === "VIII", "Hiba: 8-at vártunk, de " + romaiSzamAtvaltas(8) + " kapunk.");
    console.assert(romaiSzamAtvaltas(9) === "IX", "Hiba: 9-et vártunk, de " + romaiSzamAtvaltas(9) + " kapunk.");

    console.assert(romaiSzamAtvaltas(10) === "X", "Hiba: 10-et vártunk, de " + romaiSzamAtvaltas(10) + " kapunk.");
    console.assert(romaiSzamAtvaltas(11) === "XI", "Hiba: 11-et vártunk, de " + romaiSzamAtvaltas(11) + " kapunk.");

    console.assert(romaiSzamAtvaltas(33) === "XXXIII", "Hiba: 33-at vártunk, de " + romaiSzamAtvaltas(33) + " kapunk.");
    console.assert(romaiSzamAtvaltas(39) === "XXXIX", "Hiba: 39-et vártunk, de " + romaiSzamAtvaltas(39) + " kapunk.");
    

    console.log("Minden teszteset sikeresen lefutott.");
}

