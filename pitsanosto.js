document.addEventListener("DOMContentLoaded", väliaikanen);

function väliaikanen() {
    console.log(localStorage.getItem("pitsa"))
}

function tilaa(tää) {
    let pitsa = tää
    localStorage.setItem("pitsa", pitsa)
    window.location.href = "PoutavaSpesiaali.html"
}