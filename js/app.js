const menu = document.querySelector("#icon-menu");
const closeMenu = document.querySelector("#close-menu");
const tList = document.getElementsByClassName("toggle-list")[0];

menu.addEventListener("click", ()=>{
    if(tList.style.display === "none" || tList.style.display ===""){
        tList.style.display = "block";
    }
})

closeMenu.addEventListener("click", ()=>{
    if(tList.style.display !== "none" && tList.style.display !==""){
        tList.style.display = "none";
    }
})

