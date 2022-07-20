const firstSlid = document.getElementById("collectionFirstSlid");
const secondSlid = document.getElementById("collectionSecondSlid");
const header = document.getElementById("header");
const firstCollection = document.getElementById("homePage");
const secondCollection = document.getElementById("homePages");
const navMain = document.getElementById("nav_main");
const navbarList = document.getElementById("navbarList");

window.addEventListener("scroll", () =>{
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        header.className = "slideUp";
    }else{
        header.className = "slideDown";
    }
});

navMain.addEventListener("click", (e)=>{
    
    let el =  navbarList.classList
    let newValue = changeClass(el)
    navbarList.classList.add("display")
})

const changeClass = (el)=>{
    alert(el.length)
    if(el.length){
        alert("vide")
    }
}

firstSlid.addEventListener("click", () =>{
    firstCollection.classList.add("display")
    firstCollection.classList.remove("none")
    secondCollection.classList.add("none")
    secondCollection.classList.remove("display")
});
secondSlid.addEventListener("click", () =>{
    firstCollection.classList.add("none")
    firstCollection.classList.remove("display")
    secondCollection.classList.add("display")
    secondCollection.classList.remove("none")
})

   
    setInterval(function() {
        slider2()
      }, 5000);
      
    


function slider1(){
    firstCollection.classList.add("display")
    firstCollection.classList.remove("none")
    secondCollection.classList.add("none")
    secondCollection.classList.remove("display")
}

function slider2(){
    firstCollection.classList.add("none")
    firstCollection.classList.remove("display")
    secondCollection.classList.add("display")
    secondCollection.classList.remove("none")
}

