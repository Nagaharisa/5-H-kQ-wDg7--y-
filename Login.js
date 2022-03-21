let reg = 0;

document.addEventListener("DOMContentLoaded", onkoKirjautunut);

async function häsh(häshättävä) {
    const res = await fetch(`https://api.hashify.net/hash/md5/hex?value=${häshättävä}`)
    const data = await res.json()
    return data.Digest
}

async function onkoKirjautunut() {
    
    let kirjautunut = localStorage.getItem("kirjautunut");

    if (kirjautunut) {
        document.getElementById("nimi").value = localStorage.getItem("nimi");
    }
}

async function kirjaudu() {
    if (
        document.getElementById("nimi").value == "" ||
        document.getElementById("salasana").value == ""
    ) {
        alert("Anna nimi ja salasana!");
        return;
    }

    if (document.getElementById("nimi").value == localStorage.getItem("nimi") &&
        await häsh(document.getElementById("salasana").value) == localStorage.getItem("salasana")) {
        window.location.href = "kotisivu.html";
    } else {
        alert("Nimi tai salasana on väärin!");
    }
}

async function rekisteröidy() {
    document.getElementById("kirjautuminen").innerText = "Rekisteröidy";
    document.getElementById("kirjautumisNappi").style.display = "none";

    if (reg == 1) {
        if (
            document.getElementById("nimi").value != "" &&
            document.getElementById("salasana").value != ""
        ) {
            localStorage.setItem("nimi", document.getElementById("nimi").value);
            localStorage.setItem(
                "salasana",
                await häsh(document.getElementById("salasana").value)
            );
            localStorage.setItem("kirjautunut", true);
            window.location.href = "kotisivu.html";
        } else {
            alert("Anna nimi ja salasana");
        }
    }
    reg = 1;
}
