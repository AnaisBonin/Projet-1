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
img.src = "assets/img/stanleypark.jpg"
  Txt.innerHTML = "TOP 1 : Faire un tour à vélo de Stanley Park. Stanley Park est situé au coeur de Vancouver. D'une superficie supérieure à celle de Central Park à New York City, de nombreux vancouverites courent ou prennent leur vélo pour faire le tour, longeant les plages de 3rd Beach and Sunset Beach. Avant la colonisation, Stanley Park était un lieu de rencontre pacifique entre les différentes nations qui s'y rencontraient pour résoudre les guerres et conflits"
 })
 btn2.addEventListener("click",() => {
   img.src = "assets/img/cypress.jpg"
   Txt.innerHTML = "TOP 2 : Afterwork ski sur Cypress Mountain, avec le coucher de soleil sur les îles de la Sunshine coast."

 })
 btn3.addEventListener("click",() => {
 img.src = "assets/img/tofino.jpg"
 Txt.innerHTML = "Top 3 : Surfer à Tofino. Bon, entre le ferry et la route, Tofino se situe à 8 heures de Vancouver. Mais à l'échelle du Canada, ce n'est pas grand chose. Tofino est LE spot pour s'essayer au surf, ou bien pour prendre une zodiaque et tenter de voir -de loin afin de préserver le bien-être animal- des familles d'orques résidentes ou de baleines. A recommander : booker une journée pour visiter le hot spring! Une source d'eau chaude naturelle en pleine nature qui rencontre l'océan, à 2h30 de bateau où nous observons souvent des lions de mers, otaries, orques et baleines. "

  
 })
btn4.addEventListener("click",() => {
   img.src = "assets/img/vandusen.jpg"
   Txt.innerHTML = "Top 4 : Visiter VanDusen Botanical Garden. Le jardin botanique VanDusen s'étend sur 55 acres et contient plus de 8 000 espèces de plantes du monde entier dont 70 collections botaniques. Il y a toujours quelque chose de nouveau qui fleurit dans le jardin toutes les deux semaines. A la période de Noël, le jardin est décoré de centaines de guirlandes lumineuses et offre un spectacle féérique.  "

 })
 btn5.addEventListener("click",() => {
   img.src = "assets/img/bowen-island.jpg"
   Txt.innerHTML = "Top 5 : Prendre le ferry pour une escale sur Bowen Island. Bowen Island est une ville à 20 minutes en ferry, au départ de Horseshoe Bay. Très calme et sauvage, il n'est pas rare de faire la rencontre de biches et autres cervidés - c'est d'ailleurs l'un des rares endroits où il n'y a pas d'ours brun - que l'on rencontre fréquemment notamment sur l'île de Vancouver."


 })

