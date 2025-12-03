


function menuHamburguer() {
    let menu = document.getElementById("itensMenu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
}


function EsconderMenu() {
    let menu = document.getElementById("itensMenu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
}
/*
function menuHamburguer() {
    let menu = document.getElementById("itensMenu");
    menu.classList.toggle("ativo");
}

function EsconderMenu() {
    let menu = document.getElementById("itensMenu");
    menu.classList.remove("ativo");
}*/