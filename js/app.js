let quests = document.querySelectorAll("#quest")
let img = document.querySelectorAll("#img")
let text = document.querySelectorAll("#text")



for (let i = 0; i < quests.length; i++) {
    quests[i].addEventListener('click', toggleFunction);
     function toggleFunction(){
        img[i].classList.toggle("on");
        text[i].classList.toggle("on");
     } 
    
}


let imgModal = document.querySelectorAll(".photos img");
let modalImgOn = document.querySelector(".modalImgs")
let modalImgsOn = document.querySelector(".modalImg")
let image = document.querySelector(".modalImg img")
let bodyOverflow = document.querySelector("body");

modalImgOn.addEventListener("click", modalImgOff)
function modalImgOff (){
   modalImgOn.classList.remove("on")
   bodyOverflow.style.overflow = "auto"
   modalImgsOn.classList.remove("on")
}
for (let b = 0; b < imgModal.length; b++){
   imgModal[b].addEventListener("click", imgModalOn);
   function imgModalOn(){
      modalImgsOn.classList.add("on")
      modalImgOn.classList.add("on");
      bodyOverflow.style.overflow = "hidden"
      let newImg = imgModal[b].getAttribute("src")
      image.setAttribute("src", newImg)
      
   }

}


