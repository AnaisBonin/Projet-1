function clickAlert() {
  alert("Envoyé");
}

/*bouton pour le top */

const img = document.getElementById(`imgtoggle`)

const btn1 = document.getElementById("first-button")
const btn2 = document.getElementById("second-button")
const btn3 = document.getElementById("third-button")
const btn4 = document.getElementById("fourth-button")
const btn5 = document.getElementById("fifth-button")

 const Txt = document.querySelector(".Description1")


btn1.addEventListener("click",() => {
img.src = "assets/img/andohalo.jpg"
  Txt.innerHTML = "Exemple Texte1"
 })
 btn2.addEventListener("click",() => {
   img.src = "assets/img/anosy.jpg"
   Txt.innerHTML = "Exemple Texte2"

 })
 btn3.addEventListener("click",() => {
 img.src = "assets/img/analakely.jpg"
 Txt.innerHTML = "Exemple Texte3"

  
 })
btn4.addEventListener("click",() => {
   img.src = "assets/img/garemod.jpg"
   Txt.innerHTML = "Exemple Texte4"

 })
 btn5.addEventListener("click",() => {
   img.src = "assets/img/andohalo2.jpg"
   Txt.innerHTML = "Exemple Texte5"


 })

