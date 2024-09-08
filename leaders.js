const menuList = document.querySelectorAll(".menu ul li a");

for (menu of menuList){
    menu.addEventListener("hover", function(){
        this.style.background = "blue";
    })
}