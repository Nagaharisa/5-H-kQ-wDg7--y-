let reg = 0;

document.addEventListener("DOMContentLoaded", onkoKirjautunut);

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
