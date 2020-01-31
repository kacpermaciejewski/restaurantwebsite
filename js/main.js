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

//Menu section

const menuList = document.querySelectorAll(".menu__item");
const menuArticles= document.querySelectorAll(".menu__article")

menuList.forEach(item =>{

item.addEventListener('click',e=>{
    menuList.forEach(el =>{
        el.classList.remove('menu__item--active')
    })
    e.target.classList.add("menu__item--active")

//     //rendering articles
let counter = 0;
let distance = 180;
let name = item.getAttribute("data-name")
if(window.innerWidth<1024){
if(name != "all"){
    menuArticles.forEach(el =>{
        let elName = el.getAttribute("data-name");
        if(name == elName){
            el.style.top = `${counter*distance}px`;
            el.style.display = "block";
            el.classList.add("menu__article--active");
            counter++
        }
        else{
            el.classList.remove("menu__article--active")
            el.style.display = "none"
            
        }
    })
}
else if(name == "all"){
    
    menuArticles.forEach(el =>{
        el.style.top ="";
    el.style.display = "block"
    el.classList.add("menu__article--active");
    })
}}
else if(window.innerWidth >=1024){
   if(name != "all"){
    menuArticles.forEach(el =>{
        let elName = el.getAttribute("data-name");
        if(name == elName){
            el.style.top = `0`;
            if(counter>0 && counter%2>0){
                el.style.left = "60%";
            }
            else{
                el.style.left = 0
            }
            el.style.display = "block";
            el.classList.add("menu__article--active");
            counter++
        }
        else{
            el.classList.remove("menu__article--active")
            el.style.display = "none"
            
        }
    })


   } 

   else if(name == "all"){
    
    menuArticles.forEach(el =>{
        el.style.top ="";
        el.style.left = ""
    el.style.display = "block"
    el.classList.add("menu__article--active");
    })
}
}


   
})

})
