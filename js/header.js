const firstSlid = document.getElementById("collectionFirstSlid");
const secondSlid = document.getElementById("collectionSecondSlid");
const header = document.getElementById("header");
const firstCollection = document.getElementById("homePage");
const secondCollection = document.getElementById("homePages");
const navMain = document.getElementById("nav_main");
const navbarList = document.getElementById("navbarList");
const home = document.getElementById("home");
const homeDemoList = document.getElementById("homeDemoList");
const bestsellerArticle = document.querySelectorAll(".bestsellerArticle");
const articleWear = document.getElementsByClassName("articleWear");
const appreciation = document.getElementsByClassName("appreciation") 
const addToCard = document.getElementsByClassName("addToCard")
const articleImg = document.getElementsByClassName("articleImg")
const womenBtnCollection = document.getElementById("womenBtnCollection")
const menBtnCollection = document.getElementById("menBtnCollection")
const kidsBtnCollection = document.getElementById("kidsBtnCollection")
const womenCollection = document.getElementById("womenCollection")
const menCollection = document.getElementById("menCollection")
const kidCollection = document.getElementById("kidCollection")

window.addEventListener("scroll", () =>{
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        header.className = "slideUp";
    }else{
        header.className = "slideDown";
    }
});

navMain.addEventListener("click", ()=>{
    if(navbarList.className == "navNone"){
        navbarList.className = "navDisplay"
    }else {
        navbarList.className = "navNone"
    }
})


firstSlid.addEventListener("click", () =>{
    firstCollection.classList.add("display")
    firstCollection.classList.remove("none")
    secondCollection.classList.add("none")
    secondCollection.classList.remove("display")
    if(firstSlid.className == "firstSlid"){
        firstSlid.className = "secondSlid"
        secondSlid.className = "firstSlid"
    }else{
        firstSlid.className = "firstSlid"
        secondSlid.className = "secondSlid"
    }
   
});
secondSlid.addEventListener("click", () =>{
    firstCollection.classList.add("none")
    firstCollection.classList.remove("display")
    secondCollection.classList.add("display")
    secondCollection.classList.remove("none")
    if(secondSlid.className == "secondSlid"){
        secondSlid.className = "firstSlid"
        firstSlid.className = "secondSlid"
    }else{
        secondSlid.className = "secondSlid"
        firstSlid.className = "firstSlid"
    }
})

   
    setInterval(function() {
        slider2()
      }, 10000);
      setInterval(function() {
        slider1()
      }, 20000);
      
    


function slider1(){
    firstCollection.classList.add("display")
    firstCollection.classList.remove("none")
    secondCollection.classList.add("none")
    secondCollection.classList.remove("display")

    firstSlid.className = "firstSlid"
    secondSlid.className = "secondSlid"
   
}

function slider2(){
    firstCollection.classList.add("none")
    firstCollection.classList.remove("display")
    secondCollection.classList.add("display")
    secondCollection.classList.remove("none")

    secondSlid.className = "firstSlid"
    firstSlid.className = "secondSlid"

}
home.addEventListener("mouseover", ()=>{
    homeDemoList.className = "display"
})
homeDemoList.addEventListener("mouseover", ()=>{ 
    homeDemoList.className = "display"
})
homeDemoList.addEventListener("mouseout", ()=>{
    homeDemoList.className = "none"
});

function selectItem (){
    let hidden = document.getElementById(`${this.id}-hidden`);
    let none = document.getElementById(`${this.id}-none`);
    let invisible = document.getElementById(`${this.id}-invisible`);
    hidden.classList.remove("none")
    hidden.classList.add("display")
    none.classList.remove("none")
    none.classList.add("display")
    invisible.classList.remove("none")
    invisible.classList.add("display")
} 
function hiddenItem (){
    let hidden = document.getElementById(`${this.id}-hidden`);
    let none = document.getElementById(`${this.id}-none`);
    let invisible = document.getElementById(`${this.id}-invisible`);

    hidden.classList.remove("display")
    hidden.classList.add("none")
    none.classList.remove("display")
    none.classList.add("none")
    invisible.classList.remove("display")
    invisible.classList.add("none")
} 

bestsellerArticle.forEach(element => element.addEventListener("mouseover", selectItem));
bestsellerArticle.forEach(element => element.addEventListener("mouseout", hiddenItem));

womenBtnCollection.addEventListener("click", (e)=>{
    e.preventDefault()
    womenCollection.classList.remove("collectionNone")
    womenCollection.classList.add("collectionDisplay")
    menCollection.classList.add("collectionNone")
    menCollection.classList.remove("collectionDisplay")
    kidCollection.classList.add("collectionNone")
    kidCollection.classList.remove("collectionDisplay")
    womenBtnCollection.classList.add("selected")
    kidsBtnCollection.classList.remove("selected")
    menBtnCollection.classList.remove("selected")
})
menBtnCollection.addEventListener("click", (e)=>{
    e.preventDefault()
    menCollection.classList.remove("collectionNone")
    menCollection.classList.add("collectionDisplay")
    womenCollection.classList.add("collectionNone")
    womenCollection.classList.remove("collectionDisplay")
    kidCollection.classList.add("collectionNone")
    kidCollection.classList.remove("collectionDisplay")
    womenBtnCollection.classList.remove("selected")
    kidsBtnCollection.classList.remove("selected")
    menBtnCollection.classList.add("selected")
})
kidsBtnCollection.addEventListener("click", (e)=>{
    e.preventDefault()
    kidCollection.classList.remove("collectionNone")
    kidCollection.classList.add("collectionDisplay")
    menCollection.classList.remove("collectionDisplay")
    menCollection.classList.add("collectionNone")
    womenCollection.classList.add("collectionNone")
    womenCollection.classList.remove("collectionDisplay")
    womenBtnCollection.classList.remove("selected")
    kidsBtnCollection.classList.add("selected")
    menBtnCollection.classList.remove("selected")
})