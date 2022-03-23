let reg = 0;

document.addEventListener("DOMContentLoaded", onkoKirjautunut);

async function häsh(häshättävä) {
    const res = await fetch(
        `https://api.hashify.net/hash/md5/hex?value=${häshättävä}`
    );
    const data = await res.json();
    return data.Digest;
}

async function onkoKirjautunut() {
    if (window.location.pathname == "/kirjautuminen.html") {
        document.getElementById("nimi").value = localStorage.getItem("nimi");
        document.getElementById("salasana").value = "";
    }

    let kirjautunut = localStorage.getItem("kirjautunut");

    if (kirjautunut == "true") {
        document.getElementById("roope").innerText += ` ${localStorage.getItem(
            "nimi"
        )}!`;
        document.getElementById("roope").style.display = "block";
        document.getElementById("kirjauduUlos").style.display = "block";
        document.getElementById("kirjaudu").style.display = "none";
    } else {
        document.getElementById("kirjaudu").style.display = "block";
        document.getElementById("roope").style.display = "none";
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

    if (
        document.getElementById("nimi").value == localStorage.getItem("nimi") &&
        (await häsh(document.getElementById("salasana").value)) ==
            localStorage.getItem("salasana")
    ) {
        window.location.href = "kotisivu.html";
        localStorage.setItem("kirjautunut", "true");
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

