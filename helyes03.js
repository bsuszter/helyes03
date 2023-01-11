szavak = [
    ["a","cs","https://cdn.pixabay.com/photo/2015/08/21/16/11/antler-899123_960_720.jpg","agancs","gan"],
    ["b","cs","https://cdn.pixabay.com/photo/2018/06/03/14/39/boots-3450702_960_720.jpg", "bakancs","akan"],
    ["k","ny","https://cdn.pixabay.com/photo/2022/01/03/08/43/bamboo-forest-6912020_960_720.jpg", "köpeny","öpe"],
]
var sorszam = 0;
var kerdesszam = 0;

document.getElementById("alertbox").style.display = "none"; 
document.getElementById("helyesvalasz").style.display = "none"; 
document.getElementById("ellenoriz").style.display = "none"; 
document.getElementById("ujra").style.display = "none"; 
document.getElementById("veletlen").style.visibility = "hidden";
document.getElementById("dropzone").style.visibility = "hidden";


var feladvany_szama = szavak.length;
var tomb = kever(feladvany_szama);
//console.log(feladvany_szama, tomb)

function indit(){
    
    if (sorszam  < tomb.length) {
        //a feladvány első része
    document.getElementById("gyak").style.backgroundColor = "white";
    document.getElementById("dropzone").style.visibility = "visible";
    document.getElementById("veletlen").innerHTML = tomb[sorszam];
    document.getElementById("ellenoriz").style.display = "block"; 
    document.getElementById("indit").style.display = "none"; 
    document.getElementById("gyak").value = "";

    
    kerdesszam += 1;
    let viszonyszam = 100 / feladvany_szama;
    // progress bar programozása a kérdések számának jelöléséhez
    let $progressBar = $('.progress-bar');
    $progressBar.text(kerdesszam);
    // 30 kérdésre elosztva a 100%
    $progressBar.css('width', (viszonyszam * kerdesszam + '%'));
    //$progressBar.css('width', (kerdesszam * 100 / viszonyszam) + '%');

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
    var index_sorszam = document.getElementById("veletlen").innerHTML;
    var jatekos_valasza = document.getElementById("gyak").value;
    var vizsgal = szavak[index_sorszam][4];
    //var helyesszo = szavak[index_sorszam][vizsgal]
    console.log(vizsgal)
    console.log(jatekos_valasza)
    if (vizsgal == jatekos_valasza) {
        document.getElementById("gyak").style.backgroundColor = "#89ef75";
    } else {
        document.getElementById("gyak").style.backgroundColor = "red";
    }

}


function ujra(){
    document.location.reload();
}