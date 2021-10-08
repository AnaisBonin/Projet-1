function clickAlert() {
  alert("Envoyé");
}

/*bouton pour le top*/

const img = document.getElementById(`imgtoggle`)

const btn1 = document.getElementById("first-button")
const btn2 = document.getElementById("second-button")
const btn3 = document.getElementById("third-button")
const btn4 = document.getElementById("fourth-button")
const btn5 = document.getElementById("fifth-button")

 const Txt = document.querySelector(".Description1")


btn1.addEventListener("click",() => {
img.src = "assets/img/andohalo.jpg"
  Txt.innerHTML = "Andohalo : dans les hauteurs de la ville, proche du palaie de la reine. Permet d'avoir une vue magnifique sur le couché du soleil "
 })
 btn2.addEventListener("click",() => {
   img.src = "assets/img/anosy.jpg"
   Txt.innerHTML = "Anosy : Ancien emplacement de l'ancienne palaie de la reine, devenu aujourd'hui devenu l'emplacement d'une status d'ange sous lequel repose des anciens soldats"

 })
 btn3.addEventListener("click",() => {
 img.src = "assets/img/analakely.jpg"
 Txt.innerHTML = "Analakely : C'est une ancienne petite fôret, Anala = forêt, kely = petite"

  
 })
btn4.addEventListener("click",() => {
   img.src = "assets/img/garemod.jpg"
   Txt.innerHTML = "La gare d'Analakely : 1ere gare construite à Madagascar, avec un design français"

 })
 btn5.addEventListener("click",() => {
   img.src = "assets/img/andohalo2.jpg"
   Txt.innerHTML = "Andohalo ou la haute, très belle endroit pour avoir une vue panoramique sur tout la ville"

 })

