szavak = [
    ["a","cs","https://cdn.pixabay.com/photo/2015/08/21/16/11/antler-899123_960_720.jpg","agancs"],
    ["b","cs","https://cdn.pixabay.com/photo/2018/06/03/14/39/boots-3450702_960_720.jpg", "bakancs"],
    ["k","ny","https://cdn.pixabay.com/photo/2022/01/03/08/43/bamboo-forest-6912020_960_720.jpg", "köpeny"],
]
var sorszam = 0;

document.getElementById("alertbox").style.display = "none"; 
document.getElementById("helyesvalasz").style.display = "none"; 
document.getElementById("ellenoriz").style.display = "none"; 
document.getElementById("ujra").style.display = "none"; 


var feladvany_szama = szavak.length;
var tomb = kever(feladvany_szama);
//console.log(feladvany_szama, tomb)

function indit(){
    document.getElementById("ellenoriz").style.display = "block"; 
    document.getElementById("indit").style.display = "none"; 
    document.getElementById("gyak").value = " ";

    if (sorszam < tomb.length) {
        //a feladvány első része
        document.getElementById("szöveg1").innerHTML = szavak[tomb[sorszam]][0];
        //a feladvány 2. része
        document.getElementById("szöveg2").innerHTML = szavak[tomb[sorszam]][1];
        document.getElementById("kep").src = szavak[tomb[sorszam]][2];  
        sorszam += 1; 
    } else{
        document.getElementById("ellenoriz").style.display = "none"; 
        document.getElementById("indit").style.display = "none"; 
        document.getElementById("ujra").style.display = "block"; 

    }
}

function ellenoriz(){
    document.getElementById("indit").style.display = "block"; 
    document.getElementById("ellenoriz").style.display = "none"; 
}