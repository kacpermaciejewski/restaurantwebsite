//Mobile menu
const burger = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobileMenu")
const mobileMenuNav = document.querySelector(".mobileMenu__nav")
const overlay = document.querySelector(".mobileMenu__overlay");

burger.addEventListener('click', ()=>{
    burger.classList.add("fa-times")
    document.body.classList.add("scroll")
    mobileMenu.classList.add( "active")
    mobileMenuNav.classList.add("active");
 

})

overlay.addEventListener('click', ()=>{
    burger.classList.remove("fa-times")
    document.body.classList.remove("scroll")
    mobileMenu.classList.remove( "active")
    mobileMenuNav.classList.remove("active");
})

//Scroll
const menuBar = document.querySelector(".header__nav-mobile")
const logo = document.querySelector(".header__logo")
const menu = document.querySelector(".header__nav")



if(window.innerWidth<1024){

}
window.addEventListener("scroll",()=>{
    if(window.innerWidth<1024){
        if(window.innerWidth>=768){
            if(window.scrollY> window.innerHeight*0.1){
                menuBar.classList.add("header__nav-mobile--scrolled")
                logo.classList.add("header__logo--scrolled")
            
                
            }
            else{
                menuBar.classList.remove("header__nav-mobile--scrolled")
                logo.classList.remove("header__logo--scrolled")
            }
        }
        else{
        if(window.scrollY> window.innerHeight*0.35){
            menuBar.classList.add("header__nav-mobile--scrolled")
            logo.classList.add("header__logo--scrolled")
          
            
        }
        else{
            menuBar.classList.remove("header__nav-mobile--scrolled")
            logo.classList.remove("header__logo--scrolled")
        }
        }

    } 

    else{
        if(window.scrollY> window.innerHeight*0.2){
            menu.classList.add("header__nav--scrolled")
            logo.classList.add("header__logo--scrolled")
         
            
        }
        else{
            menu.classList.remove("header__nav--scrolled")
            logo.classList.remove("header__logo--scrolled")
        }
    }
})