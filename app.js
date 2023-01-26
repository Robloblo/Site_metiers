

ancien = 0;
window.addEventListener('scroll', function() {
    a = window.scrollY;
    
    if(a < ancien){
        console.log("Il a remonter");
        
    }
    ancien = a
    
});