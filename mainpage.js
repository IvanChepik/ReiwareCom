function openModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

window.onclick = function(event) {
  
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
function closeModal()
{
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}