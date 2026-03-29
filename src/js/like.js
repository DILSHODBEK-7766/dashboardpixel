


const likeBtn = document.querySelectorAll('.likeBtn');

likeBtn.forEach(like => {

    like.addEventListener("click", () =>{
        
        like.classList.toggle("text-red-400");
        
        like.classList.toggle("text-col");
        
    });
});