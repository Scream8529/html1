let quests = document.querySelectorAll("#quest")
let img = document.querySelectorAll("#img")
let text = document.querySelectorAll("#text")

alert(quests)
for (let i = 0; i < quests.length; i++) {
    quests[i].addEventListener('click', toggleFunction);
     function toggleFunction(){
        img[i].classList.toggle("on");
        text[i].classList.toggle("on");
     } 
    
}








