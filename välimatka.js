async function välimatka(osoite) {
    let valimatka = 0;

    let res = await fetch(`http://api.positionstack.com/v1/forward?access_key=9d0974d5f694e55ec3d9320c7090a60d&country=FI&limit=50&query=${encodeURIComponent(osoite)}`);
    let data = await res.json();

    for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].administrative_area == "Kerava") {
            valimatka = await distance(60.40515530242967, 25.09979260638944, data.data[i].latitude, data.data[i].longitude);
            continue;
        }
    }

    return valimatka.toFixed(2);
}

async function distance(lat1, lon1, lat2, lon2) {
    lon1 = (lon1 * Math.PI) / 180;
    lon2 = (lon2 * Math.PI) / 180;
    lat1 = (lat1 * Math.PI) / 180;
    lat2 = (lat2 * Math.PI) / 180;

    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;

    let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
    let c = 2 * Math.asin(Math.sqrt(a));
    let r = 6371;
    
    return c * r;
}
