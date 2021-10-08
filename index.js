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
  Txt.innerHTML = "Description image 1 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores excepturi a nesciunt voluptatem laboriosam, sunt quisquam odit ea, vero ad repellendus. Dolorem eius accusantium dolores perspiciatis est ipsum reprehenderit sed?"
 })
 btn2.addEventListener("click",() => {
   img.src = "assets/img/anosy.jpg"
   Txt.innerHTML = "Description image 2 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores excepturi a nesciunt voluptatem laboriosam, sunt quisquam odit ea, vero ad repellendus. Dolorem eius accusantium dolores perspiciatis est ipsum reprehenderit sed?"

 })
 btn3.addEventListener("click",() => {
 img.src = "assets/img/analakely.jpg"
 Txt.innerHTML = "Description image 3 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores excepturi a nesciunt voluptatem laboriosam, sunt quisquam odit ea, vero ad repellendus. Dolorem eius accusantium dolores perspiciatis est ipsum reprehenderit sed?"

  
 })
btn4.addEventListener("click",() => {
   img.src = "assets/img/garemod.jpg"
   Txt.innerHTML = "Description image 4 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores excepturi a nesciunt voluptatem laboriosam, sunt quisquam odit ea, vero ad repellendus. Dolorem eius accusantium dolores perspiciatis est ipsum reprehenderit sed?"

 })
 btn5.addEventListener("click",() => {
   img.src = "assets/img/andohalo2.jpg"
   Txt.innerHTML = "Description image 5 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores excepturi a nesciunt voluptatem laboriosam, sunt quisquam odit ea, vero ad repellendus. Dolorem eius accusantium dolores perspiciatis est ipsum reprehenderit sed?"


 })

