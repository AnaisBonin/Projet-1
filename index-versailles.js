/*bouton pour le top */

const img = document.getElementById(`imgtoggle-versailles`)

const btn1 = document.getElementById("first-button-versailles")
const btn2 = document.getElementById("second-button-versailles")
const btn3 = document.getElementById("third-button-versailles")
const btn4 = document.getElementById("fourth-button-versailles")
const btn5 = document.getElementById("fifth-button-versailles")

 const Txt = document.querySelector(".Description1-versailles")


btn1.addEventListener("click",() => {
img.src = "assets/img/Versailles/Car_Versailles.jpg"
  Txt.innerHTML = "Le château de Versailles fut la résidence des rois de France Louis XIV, Louis XV et Louis XVI. Le roi et la cour y résidaient de façon permanente. Le chateau s'étale sur 63 154m2 répartis en 2300 pièces. Le parc du château de Versailles s'étend sur 815 ha dont 93 ha de jardins."
 })
 btn2.addEventListener("click",() => {
   img.src = "assets/img/Versailles/Car_Hameau_Reine.jpg"
   Txt.innerHTML = "Le hameau de la reine est une dépendance du petit trianon. Ce hameau a été commandé par la reine Marie-Antoinette qui souhaitait s'éloigner des contraintes de la cour de Versailles, un petit paradis où le théatre et la fête lui faisaient oublier sa condition de reine."

 })
 btn3.addEventListener("click",() => {
 img.src = "assets/img/Versailles/Car_Trianon.jpg"
 Txt.innerHTML = "Le grand Trianon est un château situé dans le domaine de Versailles. Il est construit à la demande du roi Louis XIV destiné à son usage exclusif. Celui-ci est en marbre rose ce qui lui vaut le nom de \"trianon de marbre\". "

  
 })
btn4.addEventListener("click",() => {
   img.src = "assets/img/Versailles/Car_cath_stlouis.jpeg"
   Txt.innerHTML = "La cathédrale Saint-Louis de Versailles est une église de style rocaille. Elle fut bénie le 25 août 1754 et choisie comme cathédrale à la création de l'évêché de Versailles en 1802."

 })
 btn5.addEventListener("click",() => {
   img.src = "assets/img/Versailles/Car_JDP.jpg"
   Txt.innerHTML = "La salle du jeu de paume est célèbre pour le serment du jeu de paume qu'y prêtèrent les députés du Tiers état le 20 juin 1789. Elle a été construite en 1686. Le jeu de paume était un jeu très populaire et est l'ancêtre du tennis actuel."


 })

