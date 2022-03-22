async function välimatka(osoite) {
    onnistu = false;
    let valimatka = 0.0;

    let res = await fetch(
        `http://api.positionstack.com/v1/forward?access_key=9d0974d5f694e55ec3d9320c7090a60d&country=FI&limit=50&query=${encodeURIComponent(
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

    document.getElementById("välimatka").innerText = valimatka.toFixed(2);
    document.getElementById("välimatka_").style.display = "block";
    document.getElementById("välimatkaKusi").style.display = "none";
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
