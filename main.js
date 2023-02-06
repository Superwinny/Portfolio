// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('imgProjet');
var modalImg = document.getElementById("projet");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal




var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


// const menuburger = document.querySelector(".menunburger")
// const navbar = document.querySelector("#navbar")

// menuburger.addEventListener('click',()=>{
// navbar.classList.toggle('mobile-menu')
// })