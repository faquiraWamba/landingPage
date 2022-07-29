const firstTextSlid = document.getElementById("firstTextSlid");
const secondTextSlid = document.getElementById("secondTextSlid");
const thirdTextSlid = document.getElementById("thirdTextSlid");
var index = 0

function changeIndex(valeur){
    index = valeur
}

firstTextSlid.addEventListener("click", (e)=> {
    
    e.preventDefault()
    if(secondTextSlid.classList.contains("checked")){
        document.getElementById("textSlidWrap").style.transform = `translateX(${index + 98.7}vw)`
        document.getElementById("textSlidWrap").style.transition = "0.5s"
        changeIndex(index + 98.7)
    }
    if(thirdTextSlid.classList.contains("checked")){
        document.getElementById("textSlidWrap").style.transform = `translateX(${index + 197.4}vw)`
        document.getElementById("textSlidWrap").style.transition = "0.5s"
        changeIndex(index + 197.4)
    }
    firstTextSlid.classList.add("checked")
    secondTextSlid.classList.remove("checked")
    thirdTextSlid.classList.remove("checked")

})
secondTextSlid.addEventListener("click", (e)=> {
    e.preventDefault()
    if(firstTextSlid.classList.contains("checked")){
        document.getElementById("textSlidWrap").style.transform = `translateX(${index-98.7}vw)`
        document.getElementById("textSlidWrap").style.transition = "0.5s"
        changeIndex(index-98.7);
        console.log(index)
    }
    if(thirdTextSlid.classList.contains("checked")){
        document.getElementById("textSlidWrap").style.transform = `translateX(${index+98.7}vw)`
        document.getElementById("textSlidWrap").style.transition = "0.5s"
        changeIndex(index+98.7);
        console.log(index)
    }
    secondTextSlid.classList.add("checked")
    firstTextSlid.classList.remove("checked")
    thirdTextSlid.classList.remove("checked")
})
thirdTextSlid.addEventListener("click", (e)=> {
    e.preventDefault()
    if(firstTextSlid.classList.contains("checked")){
        changeIndex(0)
        document.getElementById("textSlidWrap").style.transform = `translateX(${index-197.4}vw)`
        document.getElementById("textSlidWrap").style.transition = "0.5s"
        changeIndex(index-197.4);
        console.log(index)
    } 
    if(secondTextSlid.classList.contains("checked")){  
        document.getElementById("textSlidWrap").style.transform = `translateX(${index-98.7}vw)`
        document.getElementById("textSlidWrap").style.transition = "0.5s"
        changeIndex(index-98.7);
        console.log(index)
     
    }
    thirdTextSlid.classList.add("checked")
    secondTextSlid.classList.remove("checked")
    firstTextSlid.classList.remove("checked")
})
