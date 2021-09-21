/* tabs */ 
let tablinks = document.querySelectorAll(".tablink");
      let Contents = document.querySelectorAll(".tabs_content");
      tablinks.forEach((tablink, index) => {
        tablink.addEventListener("click", () => {
          tablinks.forEach((tablink) => tablink.classList.remove("active"));
          tablink.classList.add("active");
          Contents.forEach((con) => con.classList.remove("active"));
          Contents[index].classList.add("active");
        });
      });
      tablinks[0].click();
      
      /* accordion */ 
      let accordion = document.querySelectorAll('.accordion_content')
      accordion.forEach(ac =>{
          ac.addEventListener('click',()=>{
              ac.classList.toggle('active')
          })
      })    


      /*menu*/ 

      let listTtems = document.querySelector('.list_items');
      let hamMenu= document.querySelector('.ham_menu');
      let hamImg = document.querySelector('.menu_img')
      hamMenu.addEventListener('click',()=>{
        listTtems.classList.toggle('active');
        hamMenu.classList.toggle('close')
      })