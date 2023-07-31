/* if,else,else if */

/*let a = 46;
let b = 10;
let c = 55;
let d = 21;*/
/*if(a <= 46 &&  b == 10 && c == 55 && d == 21){
    console.log("Qiymatlarning hammasi to'g'ri!");
}
else{
    console.log("Qiymatlardan kamida bittasi noto'g'ri!");
}*/
/*if(a == 45 ||  b == 11 || c == 56 || d == 21){
    console.log("Qiymatlardan kamida bittasi to'g'ri!");
}
else{
    console.log("Qiymatlarning hammasi noto'g'ri!");
}*/
/* JS data types:undefined,boolean,object */

/*let soz = 45;
let rost =false ;*/
/*let rost = 45<=46?true:false;*/
/*let arrayObject = [45,78,"text",true,false,"js"];*/
/*let oddiyObject = {ism: "Sardor",familiya:"Ikromov",yoshi:16};*/
/*console.log(oddiyObject.ism, oddiyObject.familiya,oddiyObject.yoshi)*/

/* Functions in JS */
/*let  savatcha = [12,"text"];


function savatchaniTekshir(){
    if (savatcha.length == 0){
        document.write("Savatchaning ichida" +savatcha.length+ "dona ma'lumot bor!");
    }
    else{
        document.write("Savatchaning ichida" +savatcha .length+ "ta ma'lumot bor!");
    }
}
let savatcha = [12,"text",true,false];
savatchaniTekshir();*/

/* Date in JS */
let sana =new Date();

/*sana.setFullYear(2006);
sana.setMonth(9);
sana.setUTCDate(30)*/


let yil = sana.getFullYear();
let oy = sana.getMonth();
let  kun  = sana.getDate();
let  haftakunlari = sana .getDay()
let oylari =["yanvar","fevral","mart","aprel","may","iyun","iyul",
    "avgust","sentabr",'oktabr',"noyabr","dekabr"]
let kunlar = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]
document.write("Bugun " +  yil + " -yil " + oylari[oy] + " oyining " + kun +" -kuni. Haftaning " + kunlar[haftakunlari] +" - kuni");
