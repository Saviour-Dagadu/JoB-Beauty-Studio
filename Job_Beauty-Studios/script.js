/* =====================================================
   JoB BEAUTY STUDIO
   Corrected JavaScript
===================================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ===============================
       ENABLE JS ANIMATIONS
       (Only hides reveal items when JS works)
    ================================ */


    document.body.classList.add("js-enabled");




    /* ===============================
       MOBILE MENU
    ================================ */


    const menuToggle = document.querySelector(".menu-toggle");

    const navbar = document.querySelector(".navbar");


    if(menuToggle && navbar){


        menuToggle.addEventListener("click",()=>{


            navbar.classList.toggle("active");


            const icon =
            menuToggle.querySelector("i");



            if(navbar.classList.contains("active")){


                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");


            }else{


                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");


            }


        });


    }






    /* ===============================
       CLOSE MOBILE MENU
    ================================ */


    const navLinks =
    document.querySelectorAll(".navbar a");


    navLinks.forEach(link=>{


        link.addEventListener("click",()=>{


            if(navbar){


                navbar.classList.remove("active");


            }



            if(menuToggle){


                const icon =
                menuToggle.querySelector("i");


                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");


            }



        });


    });







    /* ===============================
       SMOOTH SCROLLING
    ================================ */


    document.querySelectorAll('a[href^="#"]')
    .forEach(anchor=>{


        anchor.addEventListener("click",function(e){


            const target =
            document.querySelector(
                this.getAttribute("href")
            );


            if(target){


                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });


            }


        });


    });









    /* ===============================
       SCROLL REVEAL ANIMATION
    ================================ */


    const revealElements =
    document.querySelectorAll(".reveal");



    function revealOnScroll(){


        const windowHeight =
        window.innerHeight;



        revealElements.forEach(element=>{


            const elementTop =
            element.getBoundingClientRect().top;



            if(elementTop < windowHeight - 120){


                element.classList.add("active");


            }


        });


    }



    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    revealOnScroll();









    /* ===============================
       HEADER SCROLL EFFECT
    ================================ */


    const header =
    document.querySelector(".header");



    window.addEventListener("scroll",()=>{


        if(!header) return;



        if(window.scrollY > 50){


            header.style.background =
            "rgba(0,0,0,0.95)";


            header.style.boxShadow =
            "0 10px 30px rgba(212,175,55,0.15)";


        }else{


            header.style.background =
            "rgba(0,0,0,0.85)";


            header.style.boxShadow =
            "none";


        }


    });









    /* ===============================
       SCROLL TO TOP BUTTON
    ================================ */


    const scrollButton =
    document.getElementById("scrollTop");



    if(scrollButton){


        window.addEventListener("scroll",()=>{


            if(window.scrollY > 400){


                scrollButton.style.display="flex";

                scrollButton.style.alignItems="center";

                scrollButton.style.justifyContent="center";


            }else{


                scrollButton.style.display="none";


            }


        });



        scrollButton.addEventListener("click",()=>{


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        });


    }









    /* ===============================
       ACTIVE NAVIGATION
    ================================ */


    const sections =
    document.querySelectorAll("section");


    const navItems =
    document.querySelectorAll(".navbar a");



    window.addEventListener("scroll",()=>{


        let current="";



        sections.forEach(section=>{


            const sectionTop =
            section.offsetTop - 150;


            const sectionHeight =
            section.offsetHeight;



            if(
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ){


                current =
                section.getAttribute("id");


            }



        });



        navItems.forEach(link=>{


            link.style.color="white";



            if(
                link.getAttribute("href")
                === "#" + current
            ){


                link.style.color =
                "#d4af37";


            }



        });


    });









    /* ===============================
       FOOTER YEAR UPDATE
    ================================ */


    const copyright =
    document.querySelector(".copyright");



    if(copyright){


        const year =
        new Date().getFullYear();



        copyright.innerHTML =
        `© ${year} JoB Beauty Studio. All Rights Reserved.`;


    }






    /* ===============================
       IMAGE ERROR HANDLING
    ================================ */


    const images =
    document.querySelectorAll("img");



    images.forEach(image=>{


        image.addEventListener("error",()=>{


            console.warn(
                "Missing image:",
                image.src
            );


        });


    });



});