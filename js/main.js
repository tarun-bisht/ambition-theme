window.onload=function()
{
    navMenu();
}
const navMenu=function(){
    const menu_btn=document.querySelector(".menu-btn");
    const menu=document.querySelector(".menu");
    const menu_links=document.querySelectorAll(".menu li");
    menu_btn.addEventListener("click",function(){
        menu.classList.toggle("menu-active");
        const menu_btn_child=menu_btn.children;
        menu_links.forEach(function(link,index){
            if(link.style.animation)
            {
                link.style.animation="";
                menu_btn_child[0].style="";
                menu_btn_child[1].style="";
                menu_btn_child[2].style="";
            }
            else
            {
                link.style.animation="menulinks 0.5s ease forwards "+(index / 7 + 0.3).toString()+"s";
                menu_btn_child[0].style="transform:rotate(-45deg) translate(-6px,6px);";
                menu_btn_child[1].style="opacity:0;";
                menu_btn_child[2].style="transform:rotate(45deg) translate(-6px,-6px)";
            }
        });
    });
}