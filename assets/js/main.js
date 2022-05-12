// console.log("text");



// switch(expression){
// Anweisung zm ausführen
// switch checkt = ist case = true, dann break

// case z.B. Zahl:
// break;

//  ...
//  trifft nix zu, dann default (quasi=else):
// }

// let time = 6;
// let time = 7;
// let time = 13;

// switch (time) {

//     case 4:
//         console.log('4 Uhr')
//         break;

//     case 5:
//         console.log('5 Uhr')
//         break;

//     case 6:
//         console.log('6 Uhr')
//         break;

//     case 7:
//         console.log('7 Uhr')
//         break;

//     case 12:
//         console.log('12 Uhr')
//         break;

//     default:
//         console.log('lass mich schlafen')
// }

// ---weiteres Beispiel


// let browser = "safari";
// let version = "5";

// switch (browser + version) {

//     case "edge5":
//     case "edge6":
//         console.log('browser not supported');
//         break;

//     case "safari5":
//     case "safari6":
//         console.log('browser supported');
//         break;
//     default:
//         console.log('pls use a compatible version');
// }



function check() {


    let bl = document.getElementById('bundeslandInfo').value;
    switch (bl) {

        case "Baden-Württemberg":

            console.log('Stuttgart ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML =
                "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;

        case "Bayern":
            console.log('München ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt ";
            break;
        case "Brandenburg":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Nordrhein-Westfalen":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt            ";
            break;
        case "Thüringen":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        case "Saarland":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachsen":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "Schleswig-Holstein":
            console.log(' ist HS');
            document.getElementById('bundeslandInfoErgebnis').innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        default:
            console.log('Ein solches Bundesland gibt es in Deutschland nicht.');
    };
};
