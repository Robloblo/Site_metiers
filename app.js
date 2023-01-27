


ancien = 0;

window.addEventListener('scroll', function() {
    a = window.scrollY;
    console.log(this.window.scrollY)
    if(a > 70){
        if(a > ancien){
            console.log("Il a remonter");
            let header = document.querySelector("header");
            header.classList.add("cacher");
        }
        else{
            let header = document.querySelector("header");
            header.classList.remove("cacher");
        }
    }
    ancien = a;
    
});