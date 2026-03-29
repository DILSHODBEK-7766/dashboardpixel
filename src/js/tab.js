
const tabBtn = document.querySelectorAll(".tabBtn");

const tabContent = document.querySelectorAll(".tabContent");


tabBtn.forEach( btn => {

    btn.addEventListener("click", () =>{

        // tabBtn ichidagi data ni chaiqirb oldik. btn nomi bosilganda har bir tab alohida ishlashi uchun!!!
        const dataName = btn.dataset.tab;

        // har bir tugamadan activeBtn holatni olib tashlaymiz!!!
        tabBtn.forEach(unclickButton =>
            unclickButton.classList.remove("activeBtn")
        );


        // Keyin pressButtonga activeBtn qo'shib qo'yamiz!!!
        btn.classList.add("activeBtn");

        // tabContent active va passive holatlarini yaratish!!!
        tabContent.forEach(box =>{

            box.classList.remove("activeTab");
            box.classList.add("passiveTab");

            });

        const openBox = document.getElementById(dataName);

        openBox.classList.remove("passiveTab");

        openBox.classList.add("activeTab");
        
    });

});