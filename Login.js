let reg = 0;

document.addEventListener("DOMContentLoaded", onkoKirjautunut);

/* async function häshi() {
    _salasana = localStorage.getItem("salasana")
    let response = await fetch(`https://api.hashify.net/hash/md5/hex?value=${_salasana}`)
    data = await response.json();
    console.log(data.Digest)
} */ //Pitäskö laittaa emt kattoo kyl varmaa jossai vaihees jos jaksaa xd

function onkoKirjautunut() {
    
    let kirjautunut = localStorage.getItem("kirjautunut");

    if (kirjautunut) {
        document.getElementById("nimi").value = localStorage.getItem("nimi");
        document.getElementById("salasana").value = localStorage.getItem("salasana");
    }
}

function kirjaudu() {
    if (
        document.getElementById("nimi").value == "" ||
        document.getElementById("salasana").value == ""
    ) {
        alert("Anna nimi ja salasana!");
        return;
    }

    if (document.getElementById("nimi").value == localStorage.getItem("nimi") &&
        document.getElementById("salasana").value == localStorage.getItem("salasana")) {
        window.location.href = "pizzasivu.html";
    } else {
        alert("Nimi tai salasana on väärin!");
    }
}

function kirjauduUlos() {}

function rekisteröidy() {
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
                document.getElementById("salasana").value
            );
            localStorage.setItem("kirjautunut", true);
            window.location.href = "pizzasivu.html";
        } else {
            alert("Anna nimi ja salasana");
        }
    }
    reg = 1;
}
