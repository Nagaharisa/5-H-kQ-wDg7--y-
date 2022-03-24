async function välimatka(osoite) {
    onnistu = false;
    let valimatka = 0.0;
    let toimAika = 0;

    let res = await fetch(
        `http://api.positionstack.com/v1/forward?access_key=edc3e4fe341f0eec0d131b3d4f06a2f4&country=FI&limit=50&query=${encodeURIComponent(
            osoite
        )}`
    );
    let data = await res.json();

    for (let i = 0; i < data.data.length; i++) {
        if (true) {
            valimatka = await distance(
                60.40515530242967,
                25.09979260638944,
                data.data[i].latitude,
                data.data[i].longitude
            );
            onnistu = true;
            continue;
        }
    }

    if (!onnistu) {
        document.getElementById("välimatka_").style.display = "none";
        document.getElementById("välimatkaKusi").style.display = "block";
        return;
    }

    if (valimatka > 20) {
        document.getElementById("välimatka_").style.display = "none";
        document.getElementById("välimatkaKusi").style.display = "none";
        document.getElementById("välimatkaKusi2").style.display = "block";
        return;
    }

    if (valimatka > 0) {
        toimAika = 5;
    }
    if (valimatka > 3) {
        toimAika = 10;
    }
    if (valimatka > 10) {
        toimAika = 20;
    }

    document.getElementById("välimatkaKusi2").style.display = "none";
    document.getElementById("välimatka").innerText = valimatka.toFixed(2);
    document.getElementById("välimatka_").style.display = "block";
    document.getElementById("välimatkaKusi").style.display = "none";
    document.getElementById("toimitusAika").innerText = toimAika;
}

async function distance(lat1, lon1, lat2, lon2) {
    lon1 = (lon1 * Math.PI) / 180;
    lon2 = (lon2 * Math.PI) / 180;
    lat1 = (lat1 * Math.PI) / 180;
    lat2 = (lat2 * Math.PI) / 180;

    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;

    let a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
    let c = 2 * Math.asin(Math.sqrt(a));
    let r = 6371;

    return c * r;
}

function countdown() {
    time = parseInt(localStorage.time);

    if (isNaN(time) || time > (30*60)) {
        alert("An error occured: time left variable is corrupted, resetting timer");
        localStorage.time = 30 * 60;
        countdown();
        return null;
    }

    if (time <= 0) {
        alert("You found an easter egg!");
        return null;
    }
  
    document.getElementById('timeleft').innerText = formatTime(time);
    time--;
    localStorage.time = time;
    setTimeout('countdown()', 1000);
}

function formatTime(time) {
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
  
    if (String(seconds).length == 1) {
        return String(minutes) + ":0" + String(seconds);
    }
  
    return String(minutes) + ":" + String(seconds);
}

countdown();
