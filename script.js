  

  let card = document.querySelector(".card")
  let img_tennis=document.querySelector(".img")
  let elements=document.querySelectorAll(".element")

  console.log(elements)
  
function animarCard(){

   for (let index = 0; index < elements.length; index++) {

          card.addEventListener("mouseover",() =>{
            card.style.transform=" rotateX(-20deg)  rotateY(-20deg)"
            card.style.boxShadow="30px 30px 50px gainsboro" 
            img_tennis.style.transform="rotateZ(-40deg) TranslateY(-10px) translateX(10px) scale(1.1) "
            elements[index].style.transform=" rotateX(-10deg)  rotateY(-10deg)"
            
          
      }) 

      card.addEventListener("mouseleave",() =>{
         card.style.transform=" rotateX(0deg) rotateY(0deg)"
         card.style.boxShadow="" 
         img_tennis.style.transform="rotateZ(0deg) TranslateY(0px) translateX(0px) scale(1) "
         elements[index].style.transform=" rotateX(0deg)  rotateY(0deg)"


       
       
   }) 
      
   }

   

}

animarCard()
  