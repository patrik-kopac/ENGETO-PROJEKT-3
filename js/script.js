

// ---------- HAMBURGER MENU -----------

// tvorba premenných

    const menuIcon = document.querySelector(`.menu-icon`)

    const menuList = document.querySelector("nav")

    const hamburgerIcon = document.querySelector(".fa-solid")

// prepínanie classov z hamburger menu na krížik a naopak

    menuIcon.addEventListener(`click`, () => {
        
        if (hamburgerIcon.classList[1] === "fa-bars") {
            hamburgerIcon.classList.toggle("fa-xmark")
            hamburgerIcon.classList.remove("fa-bars")
            menuList.style.display = "block";
        } else {
            hamburgerIcon.classList.add("fa-bars")
            hamburgerIcon.classList.remove("fa-xmark");
            menuList.style.display = "none"
        }

    })




// -------- SCROLL UP BUTTON -----------

//vytiahnutie elementov z html

    const myBtn = document.querySelector("#myBtn")

// funkcia - po odscrollovaní 1200px zhora webu sa užívateľovi zobrazí button

    window.addEventListener("scroll", () => {
        
        if (window.scrollY >= 1200) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }

    })

// funkcia - keď užívateľ klikne na button, automaticky ho scrollne na vrch webu

    function topFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}





// ------------ VALUES - MOUSEENTER/MOUSELEAVE/SCROLL ----------

//vytiahnutie elementov z html

    const valueProject = document.querySelector(`.value-project`);
    const valueRealisation = document.querySelector(`.value-realisation`);
    const valueConnection = document.querySelector(`.value-connection`);

// funkcia mouseenter najetí myškou na obrázok

    const mouseEnter = (img) => {

        img.addEventListener(`mouseenter`, () => {
            img.style.transform = "scale(2.5)";
            img.style.transition = "15s";
            img.style.zIndex = 99;
        })

    }

    mouseEnter(valueProject);
    mouseEnter(valueRealisation);
    mouseEnter(valueConnection);

// funkcia mouseleave odchod z obrázku

    const mouseLeave = (img) => {

        img.addEventListener(`mouseleave`, () => {
            img.style.transform = "scale(1.0)";
            img.style.transition = "1s";
            img.style.zIndex = 1;
            valueRealisation.style.zIndex = 2;
        })

    }

    mouseLeave(valueProject);
    mouseLeave(valueRealisation);
    mouseLeave(valueConnection);




// -------------- SHOW SECTIONS AFTER SCROLL-----------

// vytiahnutie elementov z html

    const values = document.querySelector("#values");

// funkcia, kedy sa až po nascrollovaní nižšie zobrazí celá sekcia, nech to lepšie vypadá

    const showSection = (section, time) => {

        window.addEventListener("scroll", () => {
        if (window.scrollY >= time) {
            section.style.visibility = "visible";
            section.style.marginTop = "0px";
        } else {
            section.style.visibility = "hidden";
        }

    })

    }

    showSection(values, 1);




// ------------FORM --------------

// vytiahnutie elementov z html

    const form = document.querySelector("form");

    const formName = document.querySelector(".form-name input");

    const formMail = document.querySelector(".form-mail input");

    const formPhone = document.querySelector(".form-phone input");

    const formPassword = document.querySelector(".form-password input");
    const formPasswordConfirmation = document.querySelector(".form-password-confirmation input");
    const badPasswords = document.querySelector(".bad-passwords")

    const formSubmit = document.querySelector(".form-submit input")
    const formSubmitReplacement = document.querySelector(".form-submit-replacement")


    function validateForm() {
        
        const pass = document.getElementById("password").value;
        
        const passConf = document.getElementById("password-confirmation").value;

        if (pass != passConf) {
            
            alert("Hesla se neshodují!");
            return false;
        
        }

            alert("Formulář úspěšně odeslán, děkujeme!");
            return true;
    }





// ---------- DARK vs LIGHT MODE + ROTATE ------------

//vytiahnutie elementov z html

    const body = document.querySelector("body");

    const aboutUs = document.querySelector("#about-us");
    const aboutUsHeading = document.querySelector("#about-us h2");

    const ourWork = document.querySelector("#our-work");
    const ourWorkHeading = document.querySelector("#our-work h2");
    const ourWorkTable = document.querySelector("#our-work table");

    const galleryHeading = document.querySelector("#gallery h2");

    const formHeading = document.querySelector("#form h2");

    const footer = document.querySelector("#footer");

    const darkMode = document.querySelector("#dark-mode");
    const lightMode = document.querySelector("#light-mode");


// funkcia - defaultne je light mode a dark-mode button, po prekliku sa web prehodí do tmava a dark-mode button je vystriedaný light-mode buttonom

    darkMode.addEventListener(`click`, () => {

        body.style.backgroundColor = "black";
        body.style.color = "white";

        aboutUs.style.color = "white";
        aboutUsHeading.style.borderBottom = "1px solid white";

        ourWork.style.color = "white";
        ourWorkHeading.style.borderBottom = "1px solid white";
        ourWorkTable.style.color = "black";

        galleryHeading.style.borderBottom = "1px solid white";

        contacts.style.border = "1px solid white";

        form.style.color = "black";
        formHeading.style.color = "black";

        footer.style.backgroundColor = "grey";
        
        darkMode.style.display = "none";
        lightMode.style.display = "block";

    })

    lightMode.addEventListener(`click`, () => {

        body.style.backgroundColor = "white";
        body.style.color = "black";

        aboutUs.style.color = "black";
        aboutUsHeading.style.borderBottom = "1px solid black";

        ourWork.style.color = "black";
        ourWorkHeading.style.borderBottom = "1px solid black";

        galleryHeading.style.borderBottom = "1px solid black";

        contacts.style.border = "1px solid black";
        
        footer.style.backgroundColor = "black";

        lightMode.style.display = "none";
        darkMode.style.display = "block";

    })

 // Rotácia nekonečná

    $('#dark-mode' || '#light-mode').on('mouseout', function () {
        $('#dark-mode').css('animation-play-state','running');
    });