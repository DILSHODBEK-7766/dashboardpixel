

const dateTime = document.querySelectorAll(".dateTime");

dateTime.forEach(time =>{

    time.addEventListener("click", () =>{

        dateTime.forEach(time =>{

            time.classList.remove("activePage");

        })

        time.classList.add("activePage");

    });

});