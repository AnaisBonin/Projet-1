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
  img.src = "assets/img/site-futuroscope3.jpg"
    Txt.innerHTML = "Autant l’expédier tout de suite. Le grand Futuroscope que le monde nous envie ! Ses incroyables attractions pour toute la famille, l’Aquaféerie, Les Mystères du Kube, Thomas Pesquet et le stadium Aqualympique ! Star incontestée de la région, le Futuroscope sait de plus se renouveler et n’a pas du tout usurpé sa réputation."
   })
   btn2.addEventListener("click",() => {
     img.src = "assets/img/parc3.jpg"
     Txt.innerHTML = "Venez vous balader dans le beau parc de Blossac ! Nous avons du jardin à la française et du jardin anglais, du jardin de rocaille et du jardin contemporain. Il y a même un cygne noir qui côtoie d’autres animaux. Un havre de paix parfait pour se détendre et pour aller chercher un peu de fraîcheur en plein été."
  
   })
   btn3.addEventListener("click",() => {
   img.src = "assets/img/concert3.png"
   Txt.innerHTML = "Quand on veut voir des concerts à Poitiers, on a de grandes chances d’atterrir au Confort Moderne. Un pôle culturel incontournable, pour la musique donc, mais aussi pour l’art en général. On peut même y prendre un verre et y manger."
  
    
   })
  btn4.addEventListener("click",() => {
     img.src = "assets/img/poitiers-cathedral3.jpg"
     Txt.innerHTML = "Elle aussi est particulièrement spectaculaire ! Achevée au XIVème siècle (bien qu’en fait, ces deux tours ne soient pas tout à fait terminées), elle abrite l’une des pièces maîtresses de l’art du vitrail médiéval français."
  
   })
   btn5.addEventListener("click",() => {
     img.src = "assets/img/marais-poitevin3.jpg"
     Txt.innerHTML = "Parce que ce site vaut bien de sortir de Poitiers. On loue une barque et on profite de la nature. On peut aussi miser sur le vélo ou sur ses pieds pour se laisser gagner par l’ambiance unique du marais. La verdure, les animaux… C’est tout un poème le marais Poitevin ! Et vu que le Parc naturel régional du Marais Poitevin va jusqu’à la côte Atlantique, c’est encore mieux ! On tire jusqu’à la côte et on s’amuse dans les vagues !"
  
  
   })
  
  