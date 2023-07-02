const year= prompt ("Привіт! Якого ти року народження?", "");
const age= new Date ().getFullYear () - year;

if(!year){
    alert ("Шкода що ви не захотіли ввести свій рік народження.") 
} else {
    alert ("Ваш вік:" + " " +age+".")
}

const city= prompt ("В якому місті ти живеш?", "");

if (!city) {
    alert ("Шкода що ви не захотіли ввести своє місто.")
} else {
    switch (city) {
        case "Київ" : alert ("Ти живеш у столиці України.");
             break;
        case "Вашингтон": alert ("Ти живеш у столиці США.");
            break;
        case "Лондон": alert ("Ти живеш у столиці Великої Британії.");
             break;
        case city : alert ("Ти живеш у місті" +" "+city+".");
            break;
        default: console.log('default');
            break;
    }
}
   
const sport= prompt ("Який твій улюблений вид спорту?","");

if (!sport) {
    alert ("Шкода що ви не захотіли ввести свій улюблений вид спорту.")
} else {
    switch (sport) {
        case "Футбол" : alert ("Круто! Хочеш стати Кріштіану Роналду?");
             break;
        case "Бокс": alert ("Круто! Хочеш стати Олександром Усиком?");
            break;
        case "Баскетбол": alert ("Круто! Хочеш стати Майклом Джорданом?");
             break;
        default: console.log('default');
            break;
    }
}

