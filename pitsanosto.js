document.addEventListener("DOMContentLoaded", väliaikanen);

function väliaikanen() {
    document.getElementById("pizza").innerText = localStorage.getItem("pizza")
}

function tilaa(tää) {
    let pitsa = tää
    localStorage.setItem("pitsa", pitsa)
    window.location.href = "PoutavaSpesiaali.html"
}