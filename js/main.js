 bars=document.querySelector(".bars");
 navBar=document.querySelector(".nav-bar");
 navBarlink=document.querySelectorAll(".nav-bar li a");
 header=document.querySelector(".container .header");


    bars.addEventListener("click",()=>{
     navBar.classList.toggle("show");
     header.classList.toggle("header-height");

    })

  



