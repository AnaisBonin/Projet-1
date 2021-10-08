/*bouton pour le top */

const img = document.getElementById(`imgtoggle`)

const btn1 = document.getElementById("first-button")
const btn2 = document.getElementById("second-button")
const btn3 = document.getElementById("third-button")
const btn4 = document.getElementById("fourth-button")
const btn5 = document.getElementById("fifth-button")

 const Txt = document.querySelector(".Description1")


btn1.addEventListener("click",() => {
img.src = "assets/img/naplest1.jpg"
  Txt.innerHTML = "Castel Nuovo : Castel Nuovo, est un édifice historique et un des symboles de la ville de Naples. Il est connu par les Napolitains sous le nom de Maschio Angioino."
 })
 btn2.addEventListener("click",() => {
   img.src = "assets/img/naplest2.jpg"
   Txt.innerHTML = "Pompei : Pompéi est un vaste site archéologique situé en Campanie, au sud de l'Italie. Ancienne ville romaine prospère et sophistiquée, Pompéi fut ensevelie sous des mètres de cendres et de pierre ponce après l'éruption du Vésuve en 79 av. J.-C. "

 })
 btn3.addEventListener("click",() => {
 img.src = "assets/img/naplest3.jpg"
 Txt.innerHTML = "Opéra : C'est le théâtre le plus important de la ville de Naples, l'un des plus célèbres au monde et l'un des plus anciens théâtres lyriques d'Europe subsistant aujourd'hui, après le teatro Malibran de Venise et le théâtre Manoel de La Valette."

  
 })
btn4.addEventListener("click",() => {
   img.src = "assets/img/naplest4.jpg"
   Txt.innerHTML = "Place Plebiscito: Piazza del Plebiscito est la place de Naples la plus importante. Située au cœur de la ville, elle a une superficie de 25 000 m² bordée par la Basilique San Francesco di Paola, le Palais Royal, le Palazzo Salerno et le Palazzo della Prefettura."

 })
 btn5.addEventListener("click",() => {
   img.src = "assets/img/naplest5.jpg"
   Txt.innerHTML = "Posillipo : De petites plages parsèment le littoral, et les terrasses du parc Virgiliano offrent une vue sur la baie de Naples. À proximité, le parc archéologique Pausilypon comprend les ruines d'une villa romaine et d'un amphithéâtre. "


 })

