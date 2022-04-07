const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function () {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace(
                "active-btn",
                ""
            );
            this.className += " active-btn";
        });
    }

    //Sctions Active
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //resmove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove("active");
            });

            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });
}

PageTransitions();

// Button Gem scroll
$(function () {
    $(".btn-gem").click(function () {
        $("html, body").animate({ scrollTop: $("#gallery-about").offset().top },
            "slow"
        );
        return false;
    });
});

// Set year date
const date = document.querySelectorAll("#date");
/*date.innerHTML = new Date().getFullYear();*/

function setYear() {
    for (const year of date) {
        year.innerHTML = new Date().getFullYear();
    }
}

setYear();