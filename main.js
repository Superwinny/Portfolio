// Get the modal
const projets = document.querySelectorAll(`.listprojets article`);
const modal = document.getElementById(`myModal`);
const modalImg =document.getElementById(`modal-content`);
const captionText = document.getElementById(`caption`);

projets.forEach(projet =>{
  const img =projet.querySelector(`.imgProjet`)
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.getElementById(`navbar`).style.display = "none"
    document.body.style.overflow = "hidden";
  }
})







// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById(`navbar`).style.display = "flex"

}


// const menuburger = document.querySelector(".menunburger")
// const navbar = document.querySelector("#navbar")

// menuburger.addEventListener('click',()=>{
// navbar.classList.toggle('mobile-menu')
// })