var bot;
var skorkomp = 0;
var skorplayer = 0;

// merandom pilihan bot
function randombot() {
    // merandom
    bot = Math.floor(Math.random() * 3) + 1;
    if (bot == 1) {
        bot = "batu";
        document.getElementById("botbatu").style.backgroundColor = "yellow";
        document.getElementById("pilihankomp").innerHTML = "<img src='gambar/batu.png' style='max-width: 100%; max-height: 120px;'>";
    }
    else if (bot == 2) {
        bot = "gunting";
        document.getElementById("botgunting").style.backgroundColor = "yellow";
        document.getElementById("pilihankomp").innerHTML = "<img src='gambar/gunting.png' style='max-width: 100%; max-height: 120px;'>";
    }
    else {
        bot = "kertas";
        document.getElementById("botkertas").style.backgroundColor = "yellow";
        document.getElementById("pilihankomp").innerHTML = "<img src='gambar/kertas.png' style='max-width: 100%; max-height: 120px;'>";
    }
}

// mengeluarkan hasil pemenang
function hasil(el, bot) {
    if (bot == "batu") {
        if (el == "kertas") {
            document.getElementById("pemenang").innerHTML = "Player Menang!";
            skorplayer++;
            document.getElementById("skorplayer").innerHTML = skorplayer;
        }
        else if (el == "batu") {
            document.getElementById("pemenang").innerHTML = "Seri";
        }
        else { // el = gunting
            document.getElementById("pemenang").innerHTML = "Computer Menang!";
            skorkomp++;
            document.getElementById("skorkomp").innerHTML = skorkomp;
        }
    }
    else if (bot == "gunting") {
        if (el == "kertas") {
            document.getElementById("pemenang").innerHTML = "Computer Menang!";
            skorkomp++;
            document.getElementById("skorkomp").innerHTML = skorkomp;
        }
        else if (el == "gunting") {
            document.getElementById("pemenang").innerHTML = "Seri";
        }  
        else { // el = batu
            document.getElementById("pemenang").innerHTML = "Player Menang!";
            skorplayer++;
            document.getElementById("skorplayer").innerHTML = skorplayer;
        }
    }
    else { // bot = "kertas"
        if (el == "gunting") {
            document.getElementById("pemenang").innerHTML = "Player Menang!";
            skorplayer++;
            document.getElementById("skorplayer").innerHTML = skorplayer;
        }
        else if (el == "kertas") {
            document.getElementById("pemenang").innerHTML = "Seri";
        }
        else { // el = batu
            document.getElementById("pemenang").innerHTML = "Computer Menang!";
            skorkomp++;
            document.getElementById("skorkomp").innerHTML = skorkomp;
        }
        
    }
}

// pilihan player
function select(el) {
    // memasukkan pilihan player
    if (el == 1) {
        el = "kertas";
        document.getElementById("playerkertas").style.backgroundColor = "yellow";
        document.getElementById("pilihanplayer").innerHTML = "<img src='gambar/kertas.png' style='max-width: 100%; max-height: 120px;'>";
    }
    else if (el == 2) {
        el = "gunting";
        document.getElementById("playergunting").style.backgroundColor = "yellow";
        document.getElementById("pilihanplayer").innerHTML = "<img src='gambar/gunting.png' style='max-width: 100%; max-height: 120px;'>";
    }
    else {
        el = "batu";
        document.getElementById("playerbatu").style.backgroundColor = "yellow";
        document.getElementById("pilihanplayer").innerHTML = "<img src='gambar/batu.png' style='max-width: 100%; max-height: 120px;'>";
    }
    
    // memasukkan pilihan bot dengan randoman
    randombot();

    // mengoutputkan hasil pemenang
    hasil(el, bot);

    // reset setelah 3 detik
    setTimeout(reset, 3000); 
}

function reset() {
    // reset warna pilihannya
    document.getElementById("botbatu").style.backgroundColor = "white";
    document.getElementById("botgunting").style.backgroundColor = "white";
    document.getElementById("botkertas").style.backgroundColor = "white";
    document.getElementById("playerbatu").style.backgroundColor = "white";
    document.getElementById("playergunting").style.backgroundColor = "white";
    document.getElementById("playerkertas").style.backgroundColor = "white";

    // reset hasil pemenang
    document.getElementById("pemenang").innerHTML = "vs";

    // reset gambar hasil pilihan
    document.getElementById("pilihankomp").innerHTML = "";
    document.getElementById("pilihanplayer").innerHTML = "";
}