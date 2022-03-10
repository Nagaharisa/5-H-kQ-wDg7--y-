document.addEventListener("DOMContentLoaded", onkoKirjautunut)

function onkoKirjautunut() {
    let kirjautunut = localStorage.getItem("kirjautunut");

    if (kirjautunut) {
        document.getElementById("tervetuloTeksti").textContent += ` ${localStorage.getItem("nimi")}`
        document.getElementById("kirjautumisLomake").style.display = "none"
        document.getElementById("tervetuloTeksti").style.display = "block"
        document.getElementById("kirjauduUlos").style.display = "block"
    }
}

function kirjaudu() {
    if (document.getElementById("nimi").value == "") {
        alert("Anna nimi")
        return
    }
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut", true)
    // window.location.href = "/";
    window.location.href = "index.html";
}

function kirjauduUlos() {
    localStorage.clear()
    document.getElementById("kirjautumisLomake").style.display = "block"
    document.getElementById("tervetuloTeksti").style.display = "none"
    document.getElementById("kirjauduUlos").style.display = "none"
}